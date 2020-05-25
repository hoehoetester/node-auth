const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

// Validation
const { registerValidation, loginValidation } = require('../helper/validation');

/**
 * Register a new user
 * @route   POST api/user/register
 * @param   {string} name - user name
 * @param   {string} email - user email
 * @param   {string} password - password
 * @private Public
 */
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
    await user.save();
    res.send({ user: user._id });
  } catch (error) {
    res.status(400).send(error);
  }
});

/**
 * Login request
 * @route   POST api/user/login
 * @param   {string} email - user email
 * @param   {string} password - password
 * @private Public
 */
router.post('/login', async (req, res) => {
  // Validate the data
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Checking if email exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send('Email does not exist');
  }

  // Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);

  if (!validPass) {
    return res.status(400).send('Invalid passwowrd');
  }

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  try {
    res.header('auth-token', token).send(token);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
