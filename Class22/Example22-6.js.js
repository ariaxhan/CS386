const { error } = require('console');
let express = require('express');
let port = 3000;
let host = "localhost";
let app = express();
const root = '/pages';

app.use(function (req, res, next) {
	console.log('Request received on: ' + new Date().toLocaleDateString());
	next();
})

app.get('/', function (req, res) {
	throw new Error('Error processing request');
	res.send('<h1>Express server</h1>');
})

app.get('/first', function (req, res) { 
	res.sendFile('Example22-5.html', { root: __dirname });
});

app.use(function (req, res, next) {
	const error = new Error('Not found');
	error.code = 404;
	next(error);
});

app.use(function (error, req, res, next) {
	let errCode = error.code || 500;
	let errMsg = error.message || 'Internal Server Error';
	res.status(errCoode);
	res.send("<h2>Error has occured </h2> Error: " + errCode + "<p>" + errMsg + "</p>");
});

app.listen(port, host, function () {
	console.log(`Listening on ${host}:${port}
	${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);
})

