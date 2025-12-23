import React, { useEffect, useState, useCallback } from "react";
import { API } from "../config/api";
import RecordForm from "../components/RecordForm";
import RecordTable from "../components/RecordTable";
import Footer from "../components/Footer";

export default function Dashboard({ token, logout }) {
  const [records, setRecords] = useState([]);

  const fetchRecords = useCallback(async () => {
    try {
      const res = await API.get("/records", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setRecords(res.data);
    } catch (err) {
      console.error(err);
    }
  }, [token]);

  const deleteRecord = async (id) => {
    await API.delete(`/records/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchRecords();
  };

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  return (
    <div>
      <h2>DataTrack – Dashboard</h2>
      <button onClick={logout}>Logout</button>

      <RecordForm token={token} onRefresh={fetchRecords} />
      <RecordTable records={records} onDelete={deleteRecord} />

      <Footer />
    </div>
  );
}
