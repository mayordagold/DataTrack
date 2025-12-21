import React, { useState } from 'react';
import axios from 'axios';

export default function RecordForm({ token, onRefresh }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/records', {
        title,
        category,
        amount: parseFloat(amount),
        description
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTitle('');
      setCategory('');
      setAmount('');
      setDescription('');
      onRefresh();
    } catch (err) {
      alert('Failed to add record');
    }
  };

  return (
    <div>
      <h3>Add Record</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          step="0.01"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
}