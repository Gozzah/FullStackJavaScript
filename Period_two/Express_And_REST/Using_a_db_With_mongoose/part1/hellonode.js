//load http module
var http = require('http');

//Create HTTP server and listen on port 8000 for request
http.createServer(function(request,response){

    //set the respinse HTTP header with HTTP status and Content type
    //writeHead() is called to write the header of the response, that the application will serve to the client. 
response.writeHead(200, {'Content-Type': 'text/plain'})

/* The end() method both sends the content of the response 
to the client and signals to the server that the response (header and content) has been sent completely.If we don't put the response.end()
at the end then your web page will go on loading thus the response.end() is used to tell the server that the data has been loaded */
response.end('Hello World\n')
}).listen(8000)

//Print URL for accesssing server

console.log('Server running at http://127.0.0.1:8000')