// main function
function main() {
    // create sales array
    let sales = [
        '2031, 3412, 2512, 4421',
        '1984, 4154, 2893, 3189',
        '2152, 4267, 5221, 4742'
    ];
    // create array with years
    year = [2016, 2017, 2018];

    // initialize string for output
    let strOutput = '';
    // loop through and add to output
    for (let i = 0; i < sales.length; i++) {
         // strOutput += `Quarterly sales for ${year[i]} = ${sales[i]}\n`;
        strOutput += `Total sales for ${year[i]} = $${fYearlyTotals(sales, i)}\n`;

    }
    // print output, part 1
    console.log(strOutput)
}

// call main
main();

// function to calculate totals
function fYearlyTotals(arr, index) {
    // define variables
    let quarterlySales;
    let annualTotal = 0;
    // split into array
    quarterlySales = arr[index].split(",");
    // add to total, parsing into ints
    for (element of quarterlySales) {
        annualTotal += parseInt(element);
    }
    // return total
    return annualTotal;
}