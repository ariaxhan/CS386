const host = '127.0.0.1' , port = 3000; //Initialize server constants
const express = require("express");//Load express module
const app = express();//Instantiate express app instance
//--//Load session module
//Use session middleware and set some options
//--//Use session and set some options
    secret: 'UsF c00kie s$cr$t', //Use signed cookies
	resave: true, //Resave option
	saveUninitialized: false //saveUninitialized option
	})//Ending object curly brace, session parenthesis 
);//Ending app.use parenthesis
//Page Count Middleware
//--//Count middleware function, pass next into it
    //--//If req.session.views property does not exist yet
		//--//Assign zero (0) into req.session.views
    }//Ending if parenthesis
    //Assign current count into property views
	//--//If views is empty --> 0, else increment by one using short-circuiting assignment with OR
    //--//Invoke next function since req/res cycle is not finished here
}//Ending function curly brace
app.get("/", function(req, res, next) { //Usual GET route
	//--//Destroy existing session using callback with error object
		//--//If err exists, display error in console and exit here
	});//Ending callback function curly brace, destroy parenthesis
	res.send("<h1>Home Page</h1>"); //Sending view home
});//Ending callback function curly brace, method app.get parenthesis
//GET route for /page
//--//Using count middleware, then callback
	//Send html string with sessionID and page views
	res.send(`<h1>Page Route</h1>
	<p>SessionID: ${req.sessionID} </p>
	<p>Page Views: ${req.session.views}`); //Send response
});//Ending callback function curly brace, method app.get parenthesis
//Middleware
//404 error, route not found
app.use(function(req, res, next) { //app.use 404 middleware
	const error = new Error("Page not found"); //store new error "Page not found" into const error
	error.status = 404;//Set error status to 404
	next(error);//Go to next middleware
});//Ending callback function curly brace, method app.use parenthesis
//Error handler middleware
app.use( function(error, req, res, next) { //app.use error middleware
	let errCode = error.status || 500; //Declare errCode, assign error.status or 500
	let errMsg = error.message || 'Internal Server Error'; //Declare errMsg, assign error.message or internal server error
    res.status(errCode); //Set status of response object to errCode
	res.send("Error: " + errCode + "\n" + errMsg); //End response, pass errror text 
});//Ending callback function curly brace, method app.use parenthesis

//Create server and listen on port
app.listen(port, host, function(){ //app.listen, get port and server, callback
	console.log( 'Express started on ' + host + ':' + //app.get server
	port + '; press Ctrl-C to terminate.' ); //app.get port
});//Ending callback function curly brace, method app.listen parenthesis


