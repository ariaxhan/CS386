// HW3

// main function
function main() {
    // create 2d sales array
    let sales = [
        [345.54, 389.21, 745.90, 451.89, 395.67, 451.45, 598.42, 575.64, 523.78, 678.55, 874.56, 945.34],
        [423.54, 423.87, 432.87, 534.77, 385.29, 642.89, 452.84, 523.88, 554.78, 767.90, 523.44, 899.34],
        [623.87, 518.66, 372.67, 745.56, 634.56, 429.88, 528.67, 418.56, 276.52, 514.95, 639.52, 786.58],
    ];

    // part 1 and 2
    // console.log(fCalcRowTotal(sales, 1));
    // console.log(fCalcColTotal(sales, 17));

    // part 3
    // initialize month and year variables
    let year = 2016;
    let month = 1;
    // loop over years, print each total
    console.log("------Totals per year-----------------\n");
    let total = 0;
    for (let i = 0; i < 3; i++) {
        let output = fCalcRowTotal(sales, i);
        console.log(`Total for year ${year}         = $${output.toFixed(2)}\n`);
        year++;
        total += output;
    }
    console.log("--------------------------------------\n");
    // log average sales
    let result = total / 3;
    console.log(`Yearly average sales         = $${result.toFixed(2)}\n`);
    // loop over month, print each total
    console.log("------Totals per month----------------\n");
    for (let k = 0; k < 12; k++){
        let output = fCalcColTotal(sales, k);
        // create array of each value in month
        let to_average = [sales[0][k], sales[1][k], sales[2][k]];
        let average = fCalcAvg(to_average);
        console.log(`Total for month ${month}           = $${output.toFixed(2)} (Monthly average sales = $${average.toFixed(2)}))\n`);
        month++;
    }
}

// function to calculate yearly totals
function fCalcRowTotal(sales, index) {
    // initialize return string
    let toReturn = "";
    // validate index
    if (index < 0 || index > 2) {
        toReturn += "Invalid Row Index";
        return toReturn;
    }
    // loop over the row and accumulate into rowTotal
    let rowTotal = 0;
    for (item of sales[index]) {
        rowTotal += item;
    }
    return rowTotal;
}

// function to calculate monthly totals
function fCalcColTotal(sales, index) {
    // initialize return string
    let toReturn = "";
    // validate index
    if (index < 0 || index > 11) {
        toReturn += "Invalid Month";
        return toReturn;
    }
 // loop over the row and accumulate into cowTotal
    let colTotal = 0;
    for (item of sales) {
        colTotal += item[index];
    }
    return colTotal;
}

// function to calculate average of a given array
function fCalcAvg(values) {
    let output = 0;
    // add each item
    for (item of values) {
        output += item;
    }
    // divide by length of array
    output = output / values.length;
    return output;
}
 

main();
