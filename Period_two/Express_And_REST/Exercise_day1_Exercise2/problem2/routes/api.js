var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

router.get('/random', function (req, res, next) {
    res.json(jokes.getRandomJoke());
});
router.get('/all', function (req, res, next) {
    res.json(jokes.allJokes);
});
router.post('/addJoke', function (req, res, next) {
    jokes.addJoke(req.body.joke);
    res.send("Added..!");
});

module.exports = router;