$(function() { //Load Event
	$(window).resize(fResize); //Resizing of window triggers this event	
}); 

function fResize() {
	$("div").text("Width: " + window.innerWidth); //Set text to current width
	if (parseInt(window.innerWidth) === 576) {
		alert("576");
	}
}


