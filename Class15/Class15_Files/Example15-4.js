$(document).submit(function(evt) { //When form is submitted
	$("input[type=text]").each(function(index, value) { //Select and loop over all text input elements
		if (!$(this).val()) { //If value is empty --> false
			//Use placeholder to compose message
		
			//Change background color to red

			//Cancel submit event
		} else { //Input contains data
			//Change background color to green	
			
		} //Ending if statement
	}) //Ending loop
}) //End DOMContentLoaded event


