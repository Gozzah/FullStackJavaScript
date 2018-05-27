var mongoose = require('mongoose');
//let dbURI = "mongodb://miniprojectusr:test@ds213118.mlab.com:13118/miniproject";
let dbURI = "mongodb://admin:1234@ds046067.mlab.com:46067/miniproject";
//let dbURI = "mongodb://admin:1234@ds046067.mlab.com:46067/minitest"

function setDbUri(uri){
  dbURI = uri;
}

function connect(){
  return mongoose.connect(dbURI);  
}

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

module.exports = {
  setDbUri: setDbUri,
  connect: connect
}