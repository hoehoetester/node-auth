const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = 1234;

dotenv.config();

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

// Import Routes
const authRoiute = require('./routes/auth');

// Route Middlewares
app.use('/api/user', authRoiute);

app.listen(PORT, () => console.log(`🚀 🚀 🚀 Server running at port ${PORT}`));
