
// Step 1
// Use the addEventListener method to register function fLoad for the load event
window.addEventListener("load", fLoad); 
    // In function fLoad:
    function fLoad() {
    // Create variable inputLink and assign it the reference of the anchor element using the id value
        let inputLink = document.getElementById("usf");
    // Create variable div and assign it the reference of the div element using the id value
        let div = document.getElementById("divMain");
    // Call function fHover and pass variable inputLink as argument
        fHover(inputLink);
    // Call function fFadeIn and pass variable div as argument
        fFadeIn(div);
    
    }
// Create function fHover with parameter elt 
function fHover(elt) {
    // alert for part one
    // alert(`ID value of elt in fHover : ${elt.id}`);

    // Create variable fontSize and assign it the current font size of elt using getComputedStyle method
    let fontSize = window.getComputedStyle(elt).fontSize;
    // Add mouseover event for elt element, use inline function 
    elt.addEventListener("mouseover", function () {
        //change font size to 24 points
        elt.style.fontSize = "24pt"; 
    })
 // Add mouseout event for elt element, use inline function
    elt.addEventListener("mouseout", function () {
        // set it back to the initial font size using variable fontSize
        elt.style.fontSize = fontSize;
    })
}

// Create function fFadeIn with parameter elt 
function fFadeIn(elt) {
    // alert for part one
    //alert(`ID value of elt in fFadeIn: ${elt.id}`);
    // Create variable opValue and initialize it with zero
    let opValue = 0;
    // Assign opValue into the CSS opacity value of the passed element elt 
    elt.style.opacity = opValue;
    // Create variable timerID and assign it the setInterval function 
    let timerID = setInterval(function () {
        // In callback function, increment opValue by 0.01 
        opValue += 0.01;
        // assign it into the CSS opacity property
        elt.style.opacity = opValue;
        // If opValue > 1, stop the animation using the clearInterval method
        if (opValue > 1) {
            clearInterval(timerID);
        }
    // set delay
    }, 20);
}

