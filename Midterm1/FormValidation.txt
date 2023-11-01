document.addEventListener('DOMContentLoaded', function() {

    // handle the click event of the login button
    document.querySelector("button[type='submit']").addEventListener('click', function(event) {
        fValidate(event);
    });

    // handle the click event of the reset button
    document.querySelector("button[type='button']").addEventListener('click', function() {
        fReset();
    });

});

function fValidate(event) {
    let isValid = true;
    const inputs = document.querySelectorAll("input[type='text'], input[type='password']");

    // Loop over text/password input elements
    for (let input of inputs) {
        const msgElement = document.getElementById(input.name + "_msg");
        // length requirement minimum 9 max 20, inclusive
        if (input.value.length < 8 || input.value.length > 20) {
            // display message 
            msgElement.innerHTML = "Input must be between 8 to 20 characters.";
            // change background color to red
            input.style.backgroundColor = "red";
            // set valid to false
            isValid = false;
        }
    }

    // if validation is not successful, cancel form submission
    if (!isValid) {
        // issue alert
        alert("Form validation failed");
        event.preventDefault(); // Cancel form submission
        // remove background color and values from inputs
        input.style.backgroundColor = "";
        inputs.value = "";
    }
}

// handle click event of the rest button
function fReset() {
    // select all input elements of type 'text'
    const inputs = document.querySelectorAll("input[type='text']");
    // iterate over each input element
    for (let input of inputs) {
        // clear the value of the input element
        input.value = "";
        // Reset the background color of the input element to its original state
        input.style.backgroundColor = "";
        // construct the id of the message span element corresponding to the current input element
        // assuming the span id follows a naming pattern like 'inputName_msg'
        const msgElement = document.getElementById(input.name + "_msg");
        // clear the validation message for the current input element
        msgElement.innerHTML = "";
    }
}

