let number;

// prompt number
input = prompt('Enter a number: ', 0);

// alert based on remainder 
if (input % 2 === 0) { // no remainder, implicit conversion of number
    alert("Number " + input + " is even.");  
} else { // remainder
    alert("Number " + input + " is odd.");
}