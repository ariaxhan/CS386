// html object with properties top, bottom, login, admin, and loggedOut

const htmlString = {
  top: 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>icp15</title>
    </head>
    <body>`,

  bottom: 
    `</body>
    </html>`,

  login: 
    `<form action="/login" method="post">
    <p>
      <label for="user"></label>
      <input type="text" name="user" id="user" placeholder="Type your username" required/>
    </p>
    <p>
      <label for="password"></label>
      <input type="password" name="password" id="password" placeholder="Type your password" required/>
	  <br/>
	  <br/>
      <input type="submit" value="Submit" />
    </p>
    </form>`,  

  admin:
    `<h1>Admin Page</h1>
    <p>You are logged in</p>
    <hr/>
    <p><a href="/logout">Logout</a></p>`,

  loggedOut: 
    `<h1>Logged Out</h1>
    <p>You are logged out</p>
    <hr/>
    <p><a href="/">Login again</a></p>`,

}
module.exports = htmlString;
