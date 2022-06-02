const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const uniqueValidator = require('mongoose-unique-validator');
const player = require('./player');
const Float = require('mongoose-float').loadType(mongoose);
// const fantasy = require('../models/fantasy');
// const playerSchema = require('../models/player')
// user selects which position they would like to create
const playerSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    fantasyPointsPerGame: {type: Float, required: true},
    Position: {type: String, enum: ['QB', 'RB', 'WR', 'TE', 'K']},
    // if D/ST this wont be here
    PYPG: {type: Float,},
    // HB, QB, some WRs
    RYPG: {type: Float},
    RTDSPG:{type: Float,},
    // QB, option players
    PTDSPG: {type: Float},
    //For reciever only, QB and HB
    FPG: {type: Float,},
    //For QB Only
    INTPG: {type: Float,},
    // For Kicker Only
    FGPG: {type: Float,},
    IMG: {type: String},
})


const teamSchema = new mongoose.Schema({
    Scoring: {type: String, required: true, enum: ['HPPR', 'FPPR', 'Standard']},
    QB: [playerSchema],
    QB2: [playerSchema],
    RB: [playerSchema],
    RB2: [playerSchema],
    WR: [playerSchema],
    WR2: [playerSchema],
    Flex: [playerSchema],
    Flex2: [playerSchema],
    TE: [playerSchema],
    "D/ST": [playerSchema],
    //possibly kickers?
    K: [playerSchema],
})

// const userSchema = new mongoose.Schema({
//     username: {type: String, lowercase: true, unique: true, required: [true, "Please enter a username"], match: [/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/, 'is invalid'], index: true},
//     email: {type: String, unique: true, required: [true, "Please enter an email"], match: [/\S+@\S+\.\S+/, "is invalid"], index: true},
//     password: {type: String, required: true},
//     image: String,
//     hash: String,
//     salt: String,
//     team: [teamSchema],
// }, {timestamps: true});

const team = mongoose.model('team', teamSchema);
// const user = mongoose.model('user', userSchema);

module.exports = team;

// userSchema.plugin(uniqueValidator);