// create function to calculate sum
function fSumDigits(pNum) { // pNum as string parameter
    // loop through
    let sum = 0;
    // loop through each digit
    for (let digit of pNum) {
        // add each digit to sum
        sum += parseInt(digit);
    }
    // return calculated sum as a number (implicit conversion)
    return sum;
}

// create function to remove blank spaces from a string
function fRemoveSpaces(pString) {
    let newString = "";
    // loop over each char in string
    for (let char of pString) {
        // if character is a space, skip it
        if (char === " ") {
            continue;
        } else {
        // otherwise, add it to new string
            newString += char;
        }
    }
    // return string without spaces
    return newString;
}

// function to verify credit card numbers
function fVerifyCC(pCC) {
    // call prev function
    pCC = fRemoveSpaces(pCC);

    let sum = 0;

    // use i to iterate from right to left and j to determine if it's every second digit.
    for (let i = pCC.length - 1, j = 1; i >= 0; i--, j++) {
        let digit = parseInt(pCC[i]);
        
        // if j is even, it means we're at every second digit from the right
        if (j % 2 === 0) {
            // multiply by 2
            digit *= 2;
            // if digit is greater than 9, call fSumDigits
            if (digit > 9) {
                // call fSumDigits, converting digit to string
                digit = fSumDigits(digit.toString());
            }
        }
        // add digit to sum
        sum += digit;
    }
    // if sum is divisible by 10, the credit card number is valid.
    return (sum % 10 === 0) ? 'Invalid' : 'Valid';
}


// create main function to run program

function main() {
//    console.log(fSumDigits("1234"));  // expected output: 10
//   console.log(fRemoveSpaces("123 456 789"));  // expected output: 123456789

    let cc1 = '4532 7787 7109 1795';
    let result1 = fVerifyCC(cc1);
    console.log(`CC Number ${cc1} is ${result1}`);

    let cc2 = '4539 6779 0801 6808';
    let result2 = fVerifyCC(cc2);
    console.log(`CC Number ${cc2} is ${result2}`);
}


main();