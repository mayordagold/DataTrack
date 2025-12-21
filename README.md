# DataTrack — Full-Stack Record Management System

DataTrack is a **portfolio-grade full‑stack application** that demonstrates clean backend API design, authentication, database integration, and **multiple frontend implementations** (Vanilla JS, Vue 3, and React) consuming the **same REST API**.

This project mirrors real‑world engineering scenarios where one backend serves multiple clients.

---

## 🚀 Features

* User Registration & Login (JWT Authentication)
* Token‑based Authorization (protected routes)
* Create, Read, Update, Delete (CRUD) records
* One backend, three different frontends
* RESTful API architecture
* MongoDB integration (Local by default, Atlas‑ready)

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Local)
* Mongoose
* JSON Web Tokens (JWT)
* dotenv
* CORS

### Frontend

* Vanilla JavaScript (HTML, CSS, JS)
* Vue 3 (Vite)
* React (Hooks)
* Axios

---

## 📂 Project Structure

```
DataTrack/
├── backend/              # Express API & MongoDB
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
│
├── datatrack-vanilla/    # Vanilla JS frontend
│   ├── index.html
│   ├── css/
│   └── js/
│
├── datatrack-vue/        # Vue 3 frontend (Vite)
│   └── src/
│
└── datatrack-react/      # React frontend
    └── src/
```

---

## ⚙️ Backend Setup

### 1️⃣ Install dependencies

```bash
cd backend
npm install
```

### 2️⃣ Environment Variables

Create a `.env` file inside `backend/`:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/datatrack
JWT_SECRET=your_jwt_secret
```

### 3️⃣ Start MongoDB (Local)

Ensure MongoDB is running locally:

```bash
mongod
```

### 4️⃣ Run the server

```bash
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

## 🖥 Frontend Setup

### ▶ Vanilla JavaScript

```bash
cd datatrack-vanilla
npm start
```

Runs on:

```
http://localhost:3000
```

---

### ▶ Vue 3 (Vite)

```bash
cd datatrack-vue
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

### ▶ React

```bash
cd datatrack-react
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

## 🔐 Authentication Flow

1. User registers or logs in
2. Backend returns a JWT token
3. Token is stored in `localStorage`
4. Token is sent in the `Authorization` header:

```
Authorization: Bearer <token>
```

5. Protected routes verify token before granting access

---

## 📦 Database Choice (Portfolio Rationale)

* Uses **MongoDB Local** for reliability and easy setup
* Avoids third‑party cloud outages during demos
* Easily switchable to **MongoDB Atlas** by changing `MONGO_URI`

This choice ensures recruiters can run the project **without external dependencies**.

---

## 🎯 Purpose of This Project

This project was built to showcase:

* Full‑stack development skills
* Backend‑first API design
* Authentication & authorization
* Multi‑frontend architecture
* Debugging and integration skills
* Production‑style project structure

---

## 📸 Screenshots

*Add screenshots here:*

* Login page
* Dashboard
* Records list

---

## 👤 Author

**Olumayowa Oginni**
Full‑Stack Developer

---

## 📄 License

This project is for learning and portfolio demonstration purposes.
