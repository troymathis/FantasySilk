const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const uniqueValidator = require('mongoose-unique-validator');
// user selects which position they would like to create
const playerSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    fantasyPointsPerGame: {type: Number, required: true},
    // if D/ST this wont be here
    YPG: {type: Number,},
    // HB, QB, some WRs
    RTDSPG: {type: Number,},
    // QB, option players
    PTDSPG: {type: Number},
    //For reciever only, QB and HB
    FPG: {type: Number,},
    //For QB Only
    INTPG: {type: Number,},
    // For Kicker Only
    FGPG: {type: Number,},
})

const teamSchema = new mongoose.Schema({
    FPPR: {type: Boolean, required: true },
    HPPR: {type: Boolean, required: true},
    Standard: {type: Boolean, required: true},
    QB: [playerSchema],
    HB: [playerSchema],
    WR1: [playerSchema],
    WR2: [playerSchema],
    "WR3/Slot": [playerSchema],
    TE: [playerSchema],
    "D/ST": [playerSchema],
    //possibly kickers?
    K: [playerSchema],
})

const userSchema = new mongoose.Schema({
    username: {type: String, lowercase: true, unique: true, required: [true, "Please enter a username"], match: [/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/, 'is invalid'], index: true},
    email: {type: String, unique: true, required: [true, "Please enter an email"], match: [/\S+@\S+\.\S+/, "is invalid"], index: true},
    password: {type: String, required: true},
    image: String,
    hash: String,
    salt: String,
    team: [teamSchema],
}, {timestamps: true});

const team = mongoose.model('team', teamSchema);
const player = mongoose.model('player', playerSchema);
const user = mongoose.model('user', userSchema);

module.exports = team, player, user;

userSchema.plugin(uniqueValidator);