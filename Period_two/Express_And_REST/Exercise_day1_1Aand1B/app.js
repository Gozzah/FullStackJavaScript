var bodyParser = require('body-parser');
var express = require("express");
var logger = require('morgan')
var app = express();

//add your content here

app.listen(3000, function () {
    console.log("Server started, listening on: " + 3000);
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(logger(':date[web] :method :url:req[header] :http-version :referrer :user-agent'));


app.get("/api/calculator/:operation/:num1/:num2", function (req, res, next) {

    let result = "Illegal Parameter";
    var calcReq = {
        operation: req.params.operation,
        num1: num1 = Number(req.params.num1),
        num2: num2 = Number(req.params.num2),
        result: 0
        
    }
    if (calcReq.operation === "add") {
        calcReq.result = Number(num1 + num2)

        next()
    }
    else if (calcReq.operation === "sub") {
        calcReq.result = Number(num1 - num2);
        next()
    }
    else if (calcReq.operation === "mult") {
        calcReq.result = Number(num1 * num2);
        next()
    }
    //res.json({result});
    res.send(calcReq)
});



//req.operation

