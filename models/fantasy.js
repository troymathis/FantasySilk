const mongoose = require('mongoose');
const player = require('./player');
const Float = require('mongoose-float').loadType(mongoose);

const teamSchema = new mongoose.Schema({
    Name: {type: String,required: true},
    Scoring: {type: String, required: true, enum: ['HPPR', 'FPPR', 'Standard']},
    QB: {type: String},
    QB2: {type: String},
    RB: {type: String},
    RB2: {type: String},
    WR: {type: String},
    WR2: {type: String},
    Flex: {type: String},
    Flex2: {type: String},
    TE: {type: String},
    "D/ST": {type: String},
    //possibly kickers?
    K: {type: String},
})

const team = mongoose.model('team', teamSchema);

module.exports = team;