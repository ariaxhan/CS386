
// set up express app
const express = require('express');
const app = express();

// define constants
const HOST = 'localhost';
const PORT = 3000;

// set up html page
const html_top = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Homework 6</title>
</head>
<body>
`;

const html_bottom = `
</body>
</html>
`;


// route for the root path
app.get('/', function (req, res) {
    const strHTML = `
    <h1>Homework 6</h1>
	<hr/>
	<p> To view or download JSON data.</p>
	<a href="/view-json">View JSON</a>
	<a href="/json">Download JSON</a>
	<p>To view or download CSV data.</p>
	<a href="/view-csv">View CSV</a>
	<a href="/csv">Download CSV</a>
    `;
    res.send(html_top + strHTML + html_bottom);

});

// variables for file data
dataJSON = require('./dataJSON.js');
dataCSV = require('./dataCSV.js');

// create route for view-json
app.get('/view-json', function (req, res) {
    res.json(200, dataJSON);
});

// create route for csv
app.get('/view-csv', function (req, res) {
    // replace line breaks with html break elements
    dataCSV = dataCSV.replace(/\n/g, '<br>');
    // set content type to html, 
    res.status(200).contentType('html').send(dataCSV);
});

// create route for json
app.get('/json', function (req, res) {
    // set the http header content-disposition 
    res.set('Content-Disposition', 'attachment: filename="dataJSON.json"');
    // send content type, http status code, send file
    res.json(200, dataJSON).contentType("application/json");
});

// create route for csv
app.get('/csv', function (req, res) {
    // set the http header content-disposition 
    res.set('Content-Disposition', 'attachment: filename="dataCSV.csv"');
    // send content type, http status code, send file
    res.send(200, dataCSV).contentType("application/csv");
});

// 404 error, Page not found
app.use((req, res, next) => {
    res.status(404).send('404: Page not found');
});

// 500 error, Internal server error
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('500: Internal Server Error');
});

// start the server
app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
