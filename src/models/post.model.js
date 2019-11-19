const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        publishDate: {
            type: Date,
            required: true
        },
        author: {
            type: String
        },
        description: {
            type: String
        },
        id_user: {
            type: String,
            required: true
        },
    },

    { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);