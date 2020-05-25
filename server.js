require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./helper/db');

// Connect DB
connectDB();

// Import Routes
const authRoiute = require('./routes/auth');
const postsRoute = require('./routes/posts');

// Middleware
app.use(express.json());

// Route Middlewares
app.use('/api/user', authRoiute);
app.use('/api/posts', postsRoute);

app.listen(PORT, () =>
  console.log(
    `🚀 🚀 🚀 Server running at port ${PORT} - http://localhost:${PORT}/`
  )
);
