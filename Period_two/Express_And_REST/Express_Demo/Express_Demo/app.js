var bodyParser = require('body-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
var path = require('path');
var cookieParser = require('cookie-parser');
var express = require('express');
var routes = require('./routes/index');
var app = express();



app.set('views', path.join(__dirname, 'views'));//Actually the default view folder
app.set('view engine', 'jade');



app.use(favicon(path.join(__dirname, 'public','images','favicon.ico')));

app.use(logger('dev')); 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());





var names = [];
app.get('/form', function (req, res) {
(res.render('form',{ names: names} ));
});

app.post('/names', function (req, res) {
  names.push(req.body); //We receive it as a JavaScript object
  console.log(JSON.stringify(req.body)); 
  res.redirect('/form');
});


app.post('/form', function (req, res) {
  names.push(req.body.name);
  res.redirect('/form');
});

/* path.join will take care of unneccessary delimiters, that may occur 
if the given pathes come from unknown sources (eg. user input, 3rd party APIs etc.).
So path.join('a/','b') path.join('a/','/b'), path.join('a','b') and path.join('a','/b') will all give a/b.

Without using it, you usually would make expectations about the start and end of the pathes joined,
knowing they only have no or one slash.
*/



//parse application/x-www-form-urlencoded




app.use('/', routes);

//nedstående printer stacktrace ( Man kan sige at det er til programmøren)

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);  //Make sure you understand this line
  
});
/*  If you pass anything to the next() function (except the string 'route'), 
Express regards the current request as being an error,
and will skip any remaining non-error handling routing and middleware functions. 
If you want to handle that error in some way, you’ll have to create an error-handling route as described in the next section. */


  //Will not print stacktrace, er hvad brugeren skal se hvis han er på en side der ikke virker/eksiterer
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {error : err, message : err.message})
 // res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.message + "</p>");
 //throw new Error("UPPS");
});


module.exports= app;
