// Create file hw4.js and link it to html page
// Set up load or DOMContentLoaded event with event handler fLoad
window.addEventListener("load", fLoad); 

// Create function fLoad and set up two click events for both buttons
function fLoad() {
    // set up buttons
    let login = document.getElementById("login");
    let reset = document.getElementById("reset");
    // For login button the handler is fValidation
    login.addEventListener("click", fValidation);
    // For reset button the handler is fReset
    reset.addEventListener("click", fReset);
 }

// Create function fValidation:
function fValidation() {
    // get input
    let frm = document.getElementById("frm");
    let textElements = frm.querySelectorAll("input[type='text']");
     // Loop over all input text elements
    for (let element of textElements) {
        // If the length of the value property of the input is zero
        if (element.value.length == 0) {
            element.style.backgroundColor = "red"; // set the background to red
        } else {
            // remove the red background (in case it was previously set) and set it to green
            element.style.backgroundColor = "";
            element.style.backgroundColor = "green"; 
        }
    }

}
// Create function fReset:
function fReset() {
    // get input
    let frm = document.getElementById("frm");
    let textElements = frm.querySelectorAll("input[type='text']");
    // Loop over all input text elements
    for (let element of textElements) {
        // Remove red background and any entries
        element.style.backgroundColor = "";
        element.value = "";
    }
}
