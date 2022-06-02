const express = require('express');
const router = express.Router();
const methodOverride = require('method-override')
const team = require('../models/fantasy');
const player = require('../models/player.js');
const playerSeed = require('../models/playerSeed.js');


// seed
router.get('/seed', (req,res) => {
    player.deleteMany({}, (error,allPlayers) => {});
    player.create(playerSeed, (error,data) => {
        res.redirect('/');
    });
});

// index
router.get('/', (req,res) => {
    player.find({}, (error, allPlayers) => {
        res.render('home.ejs', {
            players: allPlayers,
        });
    })
    team.find({}, (error, team) => {
        res.render('home.ejs',{team: team})
    })
});



// new
router.get('/create', (req,res) => {
    res.render('new.ejs');
});

router.get('/team', (req,res) => {
    player.find({}, (error, allPlayers) => {
        res.render('newteam.ejs', {
            players: allPlayers,
        });
    })
})
// delete

// update
router.put("/player/:id", (req,res) => {
    player.findByIdAndUpdate(
        req.params.id,req.body,{new: true}, (error,updatedPlayer) => {
            res.redirect(`/player/${req.params.id}`);
        }
    )
});
// create
router.post('/createplayer', (req,res) => {
    player.create(req.body, (error, createdPlayers) => {
        res.redirect('/');
    });
})

router.post('/createteam', (req,res) => {
    team.create(req.body, (error, createdTeam) => {
        res.redirect('/');
    })
})
// edit
router.get('/player/edit/:id', (req,res) => {
    player.findById(req.params.id, (error,foundPlayer) => {
        res.render('edit.ejs', {
            player: foundPlayer,
        });
    });
});

// show
router.get('/player/:id', (req,res) => {
    player.findById(req.params.id, (err, foundPlayer) => {
        res.render('show.ejs', {
            player: foundPlayer,
        });
    });
});

module.exports = router;