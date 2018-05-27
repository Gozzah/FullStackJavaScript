var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini project', 
              msg : "Fullstack JavaScrript!!"});
});

module.exports = router;
