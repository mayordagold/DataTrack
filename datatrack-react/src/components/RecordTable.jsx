import React from 'react';

export default function RecordTable({ records, onDelete }) {
  return (
    <div>
      <h3>Your Records</h3>
      {records.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map(record => (
              <tr key={record._id}>
                <td>{record.title}</td>
                <td>{record.category || 'N/A'}</td>
                <td>${record.amount}</td>
                <td>{record.description || 'N/A'}</td>
                <td>
                  <button onClick={() => onDelete(record._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}