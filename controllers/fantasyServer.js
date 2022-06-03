const express = require('express');
const router = express.Router();
const methodOverride = require('method-override')
const team = require('../models/fantasy.js');
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
        team.find({}, (error, allTeams) => {
            res.render('home.ejs', {
                players: allPlayers,
                teams: allTeams,
            });
        })
    })
});

// new
router.get('/create', (req,res) => {
    res.render('new.ejs');
});

router.get('/createteam', (req,res) => {
    player.find({}, (error, allPlayers) => {
        res.render('newteam.ejs', {
            players: allPlayers,
        });
    })
})
// delete

router.delete('/player/:id', (req,res) => {
    player.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/');
    })
})
// update
router.put("/player/:id", (req,res) => {
    player.findByIdAndUpdate(
        req.params.id,req.body,{new: true}, (error,updatedPlayer) => {
            res.redirect(`/player/${req.params.id}`);
        }
    )
});

router.put('/team/:id', (req,res) => {
    team.findByIdAndUpdate(
        req.params.id,req.body,{new: true}, (error, updatedTeam) => {
            res.redirect(`/team/${req.params.id}`);
        }
    )
});
// create
router.post('/createplayer', (req,res) => {
    player.create(req.body, (error, createdPlayers) => {
        console.log(error);
        console.log(req.body);
        res.redirect('/');
    });
})

router.post('/createteam', (req,res) => {
    team.create(req.body, (error, createdTeam) => {
        console.log(req.body);
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

router.get('/team/:id', (req,res) => {
    team.findById(req.params.id, (err,foundTeam) => {
        player.find({}, (error, allPlayers) => {
            res.render('teamshow.ejs', {
                players: allPlayers,
                team: foundTeam,
            });
        })
    })
})

module.exports = router;