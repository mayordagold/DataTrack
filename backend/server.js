const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

// CORS configuration
// Allow requests from frontend (vanilla: http://127.0.0.1:3000)
app.use(cors({
  origin: ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://172.20.10.2:3000'],
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true // if you send cookies
}));

app.use(express.json());

// API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/records', require('./routes/records'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
