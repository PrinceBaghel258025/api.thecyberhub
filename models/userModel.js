const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Please add a name']
        },
        username: {
            type: String,
            required: [true, 'Please add an username, make sure not to use some'],
            unique: true
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Please add a password']
        },
        picture: {
            type: String,
        },
        // changes made
        streak: {
            type: Number,
            default: 0,
        },
        lastLogin: {
            type: Date,
        }
    },
    {
        timestamps: true
    })

module.exports = mongoose.model('User', userSchema)
