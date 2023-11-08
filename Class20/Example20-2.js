function fAdd(num1, num2) {
    return num1 + num2;
}

function fCalc(pNum1, pNum2, fOp) {
    return fOp(pNum1, pNum2);
}

// randomly generate two numbers
var num1 = Math.floor(Math.random() * 100);
var num2 = Math.floor(Math.random() * 100);

console.log(fCalc(num1, num2, fAdd));