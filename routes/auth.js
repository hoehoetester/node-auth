const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../model/User');

// Validation
const { registerValidation } = require('../validation');

router.post('/register', async (req, res) => {
  // Validate the data
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Checking if the user is already in database
  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist) {
    return res.status(400).send('Email already exist');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (error) {
    res.status(400).send(error);
  }
});

// router.post('/login', (req, res) => {
//   res.send('Login');
// });

module.exports = router;
