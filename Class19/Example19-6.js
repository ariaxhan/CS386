// load in core module, so you don't need file path
const http = require('http');
const host = '127.0.0.1', port = 3021;
const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    // helps client know what type of data is being sent
    res.setHeader('Content-Type', 'text/html');
    // end response and send something back
    // using html tags
    res.end(`<h1>Full-Stack Web Development</h1> 
    <p><b>First Web Server</b></p>
    <p>Today's date/time = ${Date()}</p>`); // using date string
})

// start server and listen on port 3021
server.listen(port, host, function () {
    console.log(`Server started on:
    ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}
    at http://${host}:${port}`);
})