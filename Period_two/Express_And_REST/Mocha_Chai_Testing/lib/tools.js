var https = require("https");

module.exports ={


printName(person){
 return`${person.first}, ${person.last}`

}, 

loadWiki(person, callback){


var url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`

https.get(url, function(res){

var body = "";

res.setEncoding("UTF-8")

res.on("data", function(chunck){



    body += chunck;
})

res.on("end", function(){
    callback(body)

})
    
})




}

};