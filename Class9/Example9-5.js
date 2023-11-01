let radius, circleArea;

radius = 5.23;
circleArea = (Math.PI) * Math.pow(radius, 2);

console.log(`Raw value = ${circleArea}`);
// toFixed
console.log(`toFixed(5) = ${circleArea.toFixed(5)}`);
// toExponential
console.log(`toExponential(4) = ${circleArea.toExponential(4)}`);
// toPrecision
console.log(`toPrecision(5) = ${circleArea.toPrecision(5)}`);