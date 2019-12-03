const express = require('express');
const router = express.Router();
const post = require('../controllers/post.controller');
const verifyAuth = require('../utils/verifyAuth');

router.post('/posts/', post.create);
router.delete('/posts/delete', verifyAuth, post.removeAllPosts);
router.get('/posts/', verifyAuth, post.findAll);
router.get('/post/:id', verifyAuth, post.findById);
router.patch('/post/:id', verifyAuth, post.findByIdAndUpdate);
router.delete('/post/:id', verifyAuth, post.findByIdAndRemove);

module.exports = router;