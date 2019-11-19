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
    });

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

exports.findById = (req, res) => {
    User.findById(_id = req.params.id)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured while fetching the user."
            })
        })
};

exports.findByIdAndUpdate = (req, res) => {
    if(req.body.password = bcrypt.hashSync(req.body.password, 8));

    User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occured while updating the user."
        })
    })
};

exports.findByIdAndRemove = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(user => {
        res.send(user);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occured while deleting the user."
        })
    })
};

exports.removeAllUsers = (req, res) => {
    User.remove()
    .then(
        res.status(200).send({
            message: "Successfully deleted all users."
        })
    )
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occured while deleting the user."
        })
    })
};