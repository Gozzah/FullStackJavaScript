var express = require ('express');
var app = express()

app.get('/', function(req,res){

res.send('Hello World')

})

app.listen(8000, ()=>{

console.log('Example appp listening on port 8000')
})