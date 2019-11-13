const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');

router.post('/users/', user.create);
router.get('/users/', user.findAll);

module.exports = router;