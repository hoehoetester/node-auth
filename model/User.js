const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    max: 255,
    min: 2,
  },
  email: {
    type: String,
    require: true,
    max: 255,
    min: 2,
  },
  password: {
    type: String,
    require: true,
    max: 255,
    min: 2,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model('User', userSchema);
