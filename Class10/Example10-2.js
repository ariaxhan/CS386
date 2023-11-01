// declare uninitialized variable
let input;
try {
    // for browser
    input = +prompt('Enter a number: ');
} catch {
    // for terminal
    input = process.argv[2];
}

console.log('Input= ' + input);

const INITIAL = 25;
let variable = input || INITIAL;
console.log("variable = ", variable)