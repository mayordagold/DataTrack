const authForm = document.getElementById('auth-form');
const authTitle = document.getElementById('auth-title');
const toggleLink = document.getElementById('toggle-link');
const fullNameInput = document.getElementById('fullName');

const authSection = document.getElementById('auth-section');
const dashboard = document.getElementById('dashboard');
const logoutBtn = document.getElementById('logout-btn');

let isLogin = true; // toggle login/register

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (token) {
        showDashboard();
        fetchRecords(); // fetch records if logged in
    }
});

// Toggle login/register form
toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    isLogin = !isLogin;

    if (isLogin) {
        authTitle.textContent = 'Login';
        fullNameInput.style.display = 'none';
        document.getElementById('auth-btn').textContent = 'Login';
        toggleLink.parentElement.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Register</a>`;
    } else {
        authTitle.textContent = 'Register';
        fullNameInput.style.display = 'block';
        document.getElementById('auth-btn').textContent = 'Register';
        toggleLink.parentElement.innerHTML = `Already have an account? <a href="#" id="toggle-link">Login</a>`;
    }
});

// Login/Register form submit
authForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('fullName').value;

    const endpoint = isLogin ? 'login' : 'register';

    const res = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, fullName })
    });

    const data = await res.json();

    if (data.token) {
        localStorage.setItem('token', data.token);
        showDashboard();
        fetchRecords(); // fetch records after login
    } else {
        alert(data.message || 'Authentication failed');
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    showAuth();
});

// Helpers
function showDashboard() {
    authSection.style.display = 'none';
    dashboard.style.display = 'block';
}

function showAuth() {
    authSection.style.display = 'block';
    dashboard.style.display = 'none';
}
