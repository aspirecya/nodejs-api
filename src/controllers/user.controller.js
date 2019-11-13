const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.create = (req, res, err) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);

    const user = new User({
        email: req.body.email,
        password: hashedPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        admin: req.body.admin
    })

    user.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
};

exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured while fetching all users."
            })
        })
};