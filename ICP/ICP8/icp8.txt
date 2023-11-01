// Add event handler
window.addEventListener("submit", fSubmit);

// Create function fSubmit to handle submissions
function fSubmit(event) {
    // call fRadioButtons and fTextInputs
    fRadioButtons();
    fTextInputs();
}

// Create function fRadioButtons to display an alert for radio buttons (gender)
function fRadioButtons() {
    // alert("fRadioButtons");
    // variable to reference child elements in form element 
    let form = document.getElementById("frm");
    let childElements = form.elements;
    // loop over all child elements in the form
    for (let i = 0; i < childElements.length; i++) {
        let element = childElements[i];
        // if the element name equals gender 
        if (element.name == "gender") {
             // Check whether the checked property is true (turned on)
            if (element.checked) {
             // display the value of the radio button in an alert
                alert(`Gender value selected = ${element.value}`);
            }
        }
    }
}
// Create function fTextInputs to display an alert for text inputs (name)
function fTextInputs() {
   //  alert("fTextInputs");
    // Create a reference to all text inputs using querySelectorAll (use type attribute selector)
    let allTextInputs = document.querySelectorAll("input[type='text']");
    // initialize fullName variable
    let fullName = "";
    // Loop over the text inputs
    for (let i = 0; i < allTextInputs.length; i++) {
    // accumulate first and last name(space separated) values into fullName
        let input = allTextInputs[i];
        let inputValue = input.value;
        fullName += inputValue;         // add value
        fullName += " ";                // add blank space
    }
    // After the loop, display the full name in an alert
    alert(`Full Name: ${fullName}`);
}