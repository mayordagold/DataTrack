// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecordForm from '../components/RecordForm';
import RecordTable from '../components/RecordTable';
import Footer from '../components/Footer';

export default function Dashboard({ token, logout }) {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/records', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRecords(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteRecord = async (id) => {
    await axios.delete(`http://localhost:5000/api/records/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchRecords();
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div>
      <h2>DataTrack - Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <RecordForm token={token} onRefresh={fetchRecords} />
      <RecordTable records={records} onDelete={deleteRecord} />
      <Footer />
    </div>
  );
}
