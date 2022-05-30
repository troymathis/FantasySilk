const express = require('express');
const router = express.Router();
const fantasy = require('../models/fantasy');

router.get('/', (req,res) => {
    res.send('Working...');
});

module.exports = router;