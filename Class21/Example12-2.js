// load http module
const http = require('http');
// Create const port assigning 3000, host assigning localhost
const port = 3000, host = 'localhost';
// ➢ Create const server, assign createServer method with callback function(req, res):
const server = http.createServer(function (req, res) {
	// ❑ Create const reqHeader, assign headers property or request object (req)
	const reqHeader = req.headers;
	// ❑ Loop over headers and accumulate string strHeaders, wrapping each header
	// item into <li> element
	var strHeaders = '';
	for (var prop in reqHeader) {
		strHeaders += '<li>' + prop + ': ' + reqHeader[prop] + '</li>';
	}
	//wrap strHeaders in <ul> and return 
	res.end(`<h1>Request Headers</h1>
	<p>Request header properties on ${new Date}</p>
	<ul>${strHeaders}</ul>`);
});

// listen to server connections
server.listen(port, host, function () {
	console.log(`Server started: 
	${host}:${port}
	on ${new Date()}`);
})