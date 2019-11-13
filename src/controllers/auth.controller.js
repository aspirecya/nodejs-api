const User = require('../models/user.model');
const jwtConfig = require('../configs/jwt.config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.create = (req, res, err) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);

    const user = new User({
        email: req.body.email,
        password: hashedPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        admin: req.body.admin
    });

    user.save()
        .then(data => {
            console.log("[DEBUG] User " + req.body.email + " has registered.");
            let usertoken = jwt.sign(
                {
                    id: user.email,
                    admin: user.admin
                },
                jwtConfig.secret,
                {
                    expiresIn: 86400
                }
            );
            res.send({
                auth: true,
                token: usertoken,
                body: data,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
};