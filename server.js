require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Import Routes
const authRoiute = require('./routes/auth');
const postsRoute = require('./routes/posts');

// Middleware
app.use(express.json());

// Connect DB
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log('🍺 🍺 🍺 connected DB');
  }
);

// Route Middlewares
app.use('/api/user', authRoiute);
app.use('/api/posts', postsRoute);

app.listen(PORT, () => console.log(`🚀 🚀 🚀 Server running at port ${PORT}`));
