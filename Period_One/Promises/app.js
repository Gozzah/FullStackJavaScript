var bodyParser = require('body-parser');
var express = require("express");
const crypto = require('crypto');
var bodyParser = require('body-parser');

const {makeSecureRandom} = require('./exercise1');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.listen(3000,function(){
  console.log("Server started, listening on: "+3000);
})


app.get("/api/securerandoms/:num",(req,res,next)=>{ 

var num = Number(req.params.num)
var result = makeSecureRandom(num);
res.send({result :result})
/* makeSecureRandom(num).then((answer)=>{

  res.send(answer);
  next();

}).catch((err)=>{


  console.log(err.message)
}) */
});