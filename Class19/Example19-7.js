//Declaring variables
const http = require('http'), //Loading http package
	fs = require("fs"), //Loading file system
	host = '127.0.0.1', //Setting IP address of localhost
	port = 3021; //Setting port number

//Creating an instance of http server using createServer method
const server = http.createServer(function(req, res) { //createServer method
	//Create file serving logic
	let fileurl;
	if (req.url == "/") {
		fileurl = "index.html";
	} else {
		fileurl = req.url; //Use request url to load appropriate file
	}
	let filepath = "__dirname" + "/" + fileurl;
	res.StatusCode = 200;
	fs.createReadStream(filepath).pipe(res);
});//Ending callback function curly brace, method parenthesis
//Setup listener on newly created instance
server.listen(port, host, function() { //listen method on server object
	//Display current server parameters
	console.log(`Server started on:
	${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} 
	at http://${host}:${port}/`);
});//Ending callback function curly brace, method parenthesis




