let express = require('express');
let port = 3000;
let host = "localhost";
let app = express();

app.get('/', function (req, res) {
	res.send('<h1>Express server</h1>');
})

app.listen(port, host, function () {
	console.log(`Listening on ${host}:${port}
	${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);
})