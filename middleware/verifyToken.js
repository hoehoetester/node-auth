const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).send('Access Denied');
  }

  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decodedToken;

    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};
