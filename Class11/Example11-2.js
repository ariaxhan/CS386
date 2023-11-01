let carBrands = ["Audi", "Tesla", "Ford"]
carBrands.push("Lexus", "BMW")
console.log(carBrands)
carBrands.shift()
console.log(carBrands)
carBrands.pop()
console.log(carBrands)

for (index in carBrands) {
    console.log("Element " + index + ": " + carBrands[index])
}

for (index in carBrands) {
    console.log("Index = " + index)
}

for (item of carBrands) {
    console.log("Element = " + item)
}

