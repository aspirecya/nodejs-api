const jwt = require('jsonwebtoken');


function verifyToken(req, res, next) {
    let token = req.headers['x-access-token'];
}