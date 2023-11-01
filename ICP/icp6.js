
// Create two for loops:
// Outer loop to loop over 2 through 100 inclusive with a step of 1 using iteration
// variable named number
// Inner loop to loop over 2 through less than the current number of the outer loop
// using iteration variable named i
// Within inner loop, display variable number plus colon and a space, then iteration variable i

// Create two variables named strPrimeNums (initialized to empty string) and isPrime (initialized to true)
let strPrimeNums = '';
let isPrime = true;

// Create two for loops:
// Outer loop to loop over 2 through 100 inclusive with a step of 1 using iteration
// variable named number
for (let number = 2; number <= 100; number++){
    // Inner loop to loop over 2 through less than the current number of the outer loop
    // using iteration variable named i
    for (let i = 2; i < number; i++){
        // Within inner loop, display variable number plus colon and a space, then iteration variable i
        // comment out for part 2
        // console.log(number + " : " + i);
        if (number % i === 0) {
        //if the division of number by i results in no remainder, then set Boolean variable
        // isPrime to false (that means this number is not a prime number)
            isPrime = false;
        }
    }
    //After inner loop, if Boolean variable isPrime is still true, then add current number to output string
    // strPrimeNums comma separate
    if (isPrime == true) {
        strPrimeNums += (number + ", ");
    }
    // Reset Boolean variable to true for next iteration of outer loop
    isPrime = true;
}
// After outer loop, display strPrimeNums in console.
// Remove trailing comma at the end of the string
let index = strPrimeNums.lastIndexOf(",");
let newString = strPrimeNums.slice(0, index) + strPrimeNums.slice(index + 1);
console.log(newString);

// verify output by looking up prime numbers
// prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.
// same as output

// When inspecting the output, what do you notice?

// The variable number repeats an additional time for each iteration
// for example, 3 is printed once, 4 is printed twice, 5 is printed three times, 
// 6 is printed four times and so on

// the corresponding iteration variable i starts at 2 and increases by 1 every time number is printed
// for example, when 6 is printed four times, the corresponding i is 2, 3, 4, 5. 

// this means that the variable number is repeating one additional time with each loop 
// while the iteration variable i increases by 1 for each duplicate number
// and resets to 2 with each new variable number
