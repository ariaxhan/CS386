let num1, num2, sum;

try{
    num1 = +prompt('Enter number 1 ', 0);
    num2= +prompt('Enter number 2 ', 0);
    sum = num1 + num2;
} catch {
    num1 = process.argv[2];
    num2 = process.argv[3];
}

sum = num1 + num2;
try {
    // use backtick to add variables
    alert(`The sum is = ${sum}`);
    // or you can do multi-line strings
    alert(`The result of the calculation:
            sum is = $${sum}`);
            // use double dollar sign to esc and display $
            // use single dollar sign to indicate a variable
} catch {
    console.log("Error"); // for node js, since alert doesn't work in nodejs
}
