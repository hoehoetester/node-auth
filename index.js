const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = 1234;

// Import Routes
const authRoiute = require('./routes/auth');
const postsRoute = require('./routes/posts');

dotenv.config();

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
