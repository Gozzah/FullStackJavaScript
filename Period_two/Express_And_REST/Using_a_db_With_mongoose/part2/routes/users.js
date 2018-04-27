var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('FREEEEEEEEEEEEDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!!');
});

router.get("/cool", function(req, res, next){
  res.send('Braveheart is a cool movie')
})

router.get("/cool/RuneIsNotThatCool", function(req, res, next){
  res.send("But Rune is even more cool)
})

module.exports = router;
