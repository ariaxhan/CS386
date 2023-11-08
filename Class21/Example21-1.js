// load core module for url
const url = require('url');
// create variable sampleUrl, assign value
const sampleUrl = 'http://user:pass@host.com:8080/p/a/t/h?par1=val1&par2=val2#hash';
// parse url
const objURL = url.parse(sampleUrl);
// Loop over objURL using iteration
for (var prop in objURL) {
	// exclude functions
	if (typeof (objURL[prop]) != 'function') {
		// display property and value
		console.log(prop + '= ' + objURL[prop]);
	} 
}


