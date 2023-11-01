// initialize as current date and time
let dt = new Date();
// initialize with first day of current month
let firstDayMonth = new Date(dt.getFullYear(), dt.getMonth());

console.log(`Today's date in ISO format is ${ dt.toISOString() }`);
console.log(`Today's date in local format is ${dt.toLocaleDateString()}`);
console.log(`First day of current month is ${firstDayMonth.toLocaleDateString()}`)

let diff = dt - firstDayMonth;
console.log(`Difference between those two dates is ${diff}`);
let hours = Math.round(diff / 1000 / 3600, 0);
console.log(`Difference in hours is ${hours}`);
let days = dt.getDate() - firstDayMonth.getDate();
console.log(`Difference in days is ${days}`);