import React, { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <div className="container">
      {!token ? <Login setToken={setToken} /> : <Dashboard token={token} logout={logout} />}
    </div>
  );
}

export default App;
