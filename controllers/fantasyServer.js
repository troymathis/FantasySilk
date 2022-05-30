const express = require('express');
const router = express.Router();
const fantasy = require('../models/fantasy');

router.get('/', (req,res) => {
    res.render('home.ejs');
});

router.get('/create', (req,res) => {
    res.render('new.ejs');
});
module.exports = router;