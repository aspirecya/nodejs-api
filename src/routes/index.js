const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const postRouter = require('./post.route');


router.use(userRouter);
router.use(authRouter);
router.use(postRouter);

module.exports = router;
