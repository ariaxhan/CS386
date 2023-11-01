let arrActivities = [["Reading", 0], ["Walking", 1], ["Studying", 2], ["Cooking", 3]]
console.table(arrActivities)

let strOutput = "Array of activities \n"
for (let row = 0; row < arrActivities.length; row++){
    strOutput += `Row ${row} -->`
    for (let col = 0; col < arrActivities[row].length; col++){
        strOutput += `Col ${col}: ${arrActivities[row][col]} / `
    }
    strOutput = strOutput.slice(0, strOutput.length - 3);
    strOutput += "\n"

}
console.log(strOutput)