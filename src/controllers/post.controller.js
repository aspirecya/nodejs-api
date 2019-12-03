const Post = require('../models/post.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {

    const post = new Post({
        title: req.body.title,
        publishDate: req.body.publishDate,
        author: req.body.author,
        description: req.body.description,
        id_user: req.body.id_user,
    });

    post.save()
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
    Post.find()
        .then(posts => {
            res.send(posts);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured while fetching all posts."
            })
        })
};

exports.findById = (req, res) => {
    Post.findById(_id = req.params.id)
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured while fetching the post."
            })
        })
};

exports.findByIdAndUpdate = (req, res) => {
    if(req.body.password = bcrypt.hashSync(req.body.password, 8));

    Post.findByIdAndUpdate(req.params.id, req.body)
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured while updating the post."
            })
        })
};

exports.findByIdAndRemove = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(post => {
            res.send(post);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured while deleting the post."
            })
        })
};

exports.removeAllPosts = (req, res) => {
    Post.remove()
        .then(
            res.status(200).send({
                message: "Successfully deleted all posts."
            })
        )
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured while deleting the post."
            })
        })
};