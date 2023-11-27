const express = require('express');
const session = require('express-session');
const html = require('./icp15_html');

const app = express();
const HOST = 'localhost';
const PORT = 3000;

// create a variable sSession at the top level
let sSession;

// use session middleware
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true,
}));

// use middleware to parse urlencoded form data
app.use(express.urlencoded({ extended: true }));

// route for the root path
app.get('/', function (req, res) {
  // set sSession to the session object of the request
  sSession = req.session;

  // check if sSession has a user property
  if (sSession.user) {
    // redirect to the admin route
    res.redirect(303, '/admin');
  } else {
    // return the login form
    res.send(html.top + html.login + html.bottom);
  }
});

// route for the admin path
app.get('/admin', function (req, res) {
  // set sSession to the session object of the request
  sSession = req.session;

  // check if sSession has a user property
  if (sSession.user) {
    // send admin html
    res.send(html.top + html.admin + html.bottom);
  } else {
    // redirect to the root route
    res.redirect(303, '/');
  }
});

// route for login form submission
app.post('/login', function (req, res) {
  // set sSession to the session object of the request
  sSession = req.session;

  // assign the user property of the request body into sSession.user
  sSession.user = req.body.user;

  // redirect to the admin route
  res.redirect(303, '/admin');
});

// route for logout
app.get('/logout', function (req, res) {
  // destroy the current session
  req.session.destroy(function (err) {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).send("Error while logging out");
      return;
    }
    // send logged out html
    res.send(html.top + html.loggedOut + html.bottom);
  });
});

// start the server
app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
