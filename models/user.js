const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const uniqueValidator = require('mongoose-unique-validator');
const team = require('../models/fantasy');
const { use } = require('bcrypt/promises');

const userSchema = new mongoose.Schema({
    username: {type: String, lowercase: true, unique: true, required: [true, "Please enter a username"], match: [/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/, 'is invalid'], index: true},
    email: {type: String, unique: true, required: [true, "Please enter an email"], match: [/\S+@\S+\.\S+/, "is invalid"], index: true},
    password: {type: String, required: true},
    image: String,
    hash: String,
    salt: String,
    team: [team],
}, {timestamps: true});

userSchema.plugin(uniqueValidator);

const user = mongoose.model('user', userSchema);
module.exports = user; 