const API_BASE = 'http://localhost:5000/api';

document.addEventListener('DOMContentLoaded', () => {
    const recordForm = document.getElementById('record-form');
    const logoutBtn = document.getElementById('logout-btn');

    // Handle record form submission
    recordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const category = document.getElementById('category').value;
        const amount = document.getElementById('amount').value;
        const description = document.getElementById('description').value;
        const token = localStorage.getItem('token');
        
        try {
            const response = await fetch(`${API_BASE}/records`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ title, category, amount: parseFloat(amount), description })
            });
            
            if (response.ok) {
                recordForm.reset();
                loadRecords();
            } else {
                alert('Failed to add record');
            }
        } catch (error) {
            console.error('Add record error:', error);
            alert('Network error. Please try again.');
        }
    });

    // Handle logout
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        showAuth();
    });
});

async function loadRecords() {
    const token = localStorage.getItem('token');
    if (!token) return;
    
    try {
        const response = await fetch(`${API_BASE}/records`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (response.ok) {
            const records = await response.json();
            displayRecords(records);
        } else {
            console.error('Failed to load records');
        }
    } catch (error) {
        console.error('Load records error:', error);
    }
}

function displayRecords(records) {
    const container = document.getElementById('records-container');
    container.innerHTML = '';
    
    if (records.length === 0) {
        container.innerHTML = '<p>No records found.</p>';
        return;
    }
    
    records.forEach(record => {
        const recordDiv = document.createElement('div');
        recordDiv.className = 'record-item';
        recordDiv.innerHTML = `
            <h4>${record.title}</h4>
            <p><strong>Category:</strong> ${record.category || 'N/A'}</p>
            <p><strong>Amount:</strong> $${record.amount}</p>
            <p><strong>Description:</strong> ${record.description || 'N/A'}</p>
            <button onclick="deleteRecord('${record._id}')" style="background-color: #e74c3c; margin-top: 10px;">Delete</button>
        `;
        container.appendChild(recordDiv);
    });
}

async function deleteRecord(id) {
    const token = localStorage.getItem('token');
    
    try {
        const response = await fetch(`${API_BASE}/records/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (response.ok) {
            loadRecords();
        } else {
            alert('Failed to delete record');
        }
    } catch (error) {
        console.error('Delete record error:', error);
        alert('Network error. Please try again.');
    }
}