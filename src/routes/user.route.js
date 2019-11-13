const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const verifyAuth = require('../utils/verifyAuth');

router.post('/users/', user.create);
router.get('/users/', verifyAuth, user.findAll);

module.exports = router;