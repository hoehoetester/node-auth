const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, (req, res) => {
  res.send(req.user);
  //   res.json({
  //     posts: {
  //       title: 'post title',
  //       description: 'ahahaha',
  //     },
  //   });
});
module.exports = router;
