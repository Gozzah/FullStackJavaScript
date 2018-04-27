var express = require('express');
var jokes = require('../model/jokes');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home')
});

router.get('/random', function(req, res, next) {
  req.session.randomJokeCounter +=1;;
  res.render('random', { joke: jokes.getRandomJoke(), count : req.session.randomJokeCounter});
  console.log(req.session.randomJokeCounter)
});

router.get('/all', function(req, res, next) {
  req.session.jokesCount +=1;
  res.render('all', { jokes: jokes.allJokes(), count : req.session.jokesCount});
  
});

router.get('/addJoke', function(req, res, next) {
  req.session.addjokecount +=1
  res.render('add', {count:req.session.addjokecount})
});

router.post('/storeJoke', function(req,res,next){
  
  jokes.addJoke(req.body.joke)
 /*  res.render('addJoke', {optionalMessage: "Received new joke!"}); */
res.redirect('addJoke')

});

router.get('/', function(req, res, next) {
  res.render("login");
});

router.post("/home", function(req, res){
  console.log(req.session.username)
  req.session.username = req.body.username;
  console.log(req.session.username)
  if(req.body.username!== ""){


  res.render("home", {optionalMessage: "Logged in as " + req.body.username});
}else{
  
  res.render("login")
}
});
module.exports = router;
