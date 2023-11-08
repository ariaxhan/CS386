// register the load event
function fLoad() {
	// get reference for the button
	var btn = document.getElementById("btnSend");
	// register click event, calling function fAJAX
    btn.addEventListener("click", fAJAX);
}

// function to make AJAX request
function fAJAX() {
    // alert("AJAX request has been made");
	// get reference to the textarea element and initialize to an empty string
	let taElement = document.getElementById("txtArea");
	taElement.value = "";
	// create ajax request
	let xhr = new XMLHttpRequest();
	// get drop down choice
	let choice = document.getElementById("ddlCategory").value;;
	let newUrl = "https://v2.jokeapi.dev/joke/" + choice + "?safe-mode&type=single";
	console.log("url: " + newUrl);
	xhr.open("GET", newUrl);
	xhr.send();
	// load event
	xhr.onload = function () {
		// check status, if successful
		if (xhr.status == 200) {
			// display response text in the console
			console.log(xhr.responseText);
			// display the joke property in textarea 
			taElement.value = JSON.parse(xhr.responseText).joke;
		// otherwise, log error to the console
		} else {
			console.log(`Error ${xhr.status}: ${xhr.statusText}`);
		}
	}
}

// Register the load event with function fLoad
window.addEventListener("DOMContentLoaded", fLoad);
