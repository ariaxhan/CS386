const htmlForm = require('./modHtmlFormGET'); //Loading string html form
const http = require('http');//Load http module
const url = require('url');//Load url module
const port = 3000, host = 'localhost'; //Define host, port
//Create http server
const server = http.createServer(function (req, res) {//Assign return value of createServer into server constant
	console.log(`Request method: ${req.method} and url: ${req.url}`);//Output request method and url
	//Create variable objURL, parse request url with true argument for query string
	objURL = url.parse(req.url, true);
	//Check for request method and url = /
	if (req.method === 'GET' && (req.url === "/")) {
		//Send html form
		res.end(htmlForm);
	//Check for request method GET and objURL pathname /form_get
	} else if (req.method === "GET" && objURL.pathname === "/form get") {
		//Assign query property of objURL into constant objQS
		const objQS = objURL.query;
		//Assign variable strHtml h1 with string 'GET Request'
		let strHtml = '<h1>GET Request</h1>';
		//Loop over query object objQS using prop as iteration variable
		for (var prop in objQS) {
			//Accumulate iteration variable prop, colon and value of objQS wrapped in <p> into strHTML
			strHtml += `<p>${prop}: ${objQS[prop]}</p>`;
		}
		//Ending for loop curly brace
		//Send strHtml
		res.end(strHtml);

	};//Ending else if curly brace
});//Ending callback function curly brace, method parenthesis
server.listen(port, host, function() {//Starting server and listening for income connections
	console.log(`Server started:
	${host}:${port} 
	on: ${new Date}`);//Display console message when server started
});//Ending callback function curly brace, method parenthesis





