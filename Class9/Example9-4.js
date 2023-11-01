// program to determine whether entered number is even or odd
let num, result;

try {
    num = +prompt("Enter number");
    result = num % 2;
    alert(`Entered number ${num} is odd: ${Boolean(result)}`);

} catch (error) {
    num = process.argv[2];
    result = num % 2;
    console.log(`Entered number ${num} is odd: ${Boolean(result)}`);      
}