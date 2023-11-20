const fs = require('fs');
const express = require('express');
const app = express();

// create the following constants
const PORT = 3000;
const HOST = "localhost";
const DIR = "./logs"; // current path plus '/logs'
const FILE_LOG = DIR + "/log.txt"; // dir plus '/log.txt'
const HTML = "<h1>In-Class Programming 13</h1>"; // h1 header showing 'In-Class Programming 13'

    // test for directory logs, if it does not exist, create it
    if (!fs.existsSync(DIR)) {
        fs.mkdirSync(DIR);
        console.log('Logs directory created');
    }

// function flog to log information to file /logs/log.txt
function fLog(strMsg, bUseDate = false, req = null) {
    let logMessage = strMsg;
    // add date/time stamp in flog using parameter passed whether to use date/time or not
    if (bUseDate) {
        logMessage += new Date().toISOString() + " ";
    }
    logMessage += "\n";

    // for root request (“/”) only, include user-agent, hostname, ip, and protocol
    if (req && req.url === "/") {
        logMessage += "---- User Agent: " + req.get('User-Agent') + "\n";
        logMessage += "---- Hostname: " + req.hostname + "\n";
        logMessage += "---- IP address: " + req.ip + "\n";
        logMessage += "---- Protocol: " + req.protocol + "\n";
    }

    // write logging information to file
    fs.appendFileSync(FILE_LOG, logMessage);
}

// middleware to log each request
app.use(function (req, res, next) {
    fLog('Request received on: ', true, req);
    next();
});

// for the home route (/) send constant html
app.get('/', function (req, res) {
    fLog('Root route accessed on: ', true, req);
    res.send(HTML);
});

// create route /error and throw error with message ‘something went wrong’
app.get('/error', function (req, res, next) {
    fLog("ERROR route accessed on ", true, req);
    next(new Error('Something went wrong'));
});

// 404 error handler
app.use(function (req, res, next) {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// error handling middleware
app.use(function (error, req, res, next) {
    let errCode = error.status || 500;
    let errMsg = error.message || 'Internal Server Error';
    res.status(errCode);
    res.send("<h2>Error has occurred </h2><p>Error: " + errMsg + "</p>");
    fLog(`Error ${errCode} generated on `, true);
});

// assign the return value of app.listen into a constant named server
const server = app.listen(PORT, HOST, function () {
    console.log(`Server running at http://${HOST}:${PORT}/`);
    fLog("Server started on: ", true);
});

// use on event registration method on process object using ‘sigint’ as the event name
process.on('SIGINT', () => {
    fLog('SIGINT signal received on: ', true);
    // close server by using close method on constant server
    server.close(() => {
        fLog('Closing http server on: ', true);
        fLog('Http server closed on: ', true);
        process.exit(0); // then exit the process by using process.exit(0)
    });
});
