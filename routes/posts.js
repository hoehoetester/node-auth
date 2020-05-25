const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');

/**
 * Just test for token for test
 * @route  GET api/posts
 * @desc   Get all posts
 * @access Private
 */
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
