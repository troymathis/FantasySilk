const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);
const fantasy = require('../models/fantasy');

const playerSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    fantasyPointsPerGame: {type: Float, required: true},
    Position: {type: String, enum: ['QB', 'RB', 'WR', 'TE', 'K', 'D/ST', 'QB2', 'RB2', 'WR2', 'Flex', 'Flex2'], required: true},
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

const player = mongoose.model('player', playerSchema);
module.exports = player;