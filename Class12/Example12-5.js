let object = { a: 1, b: false, c: null, d: "", f: undefined, z: new Date() };

function fObjLoop(object) {
    for (value in object) {
        console.log(value + ": " + object[value]);
    }
}

console.log("Initial object");
fObjLoop(object);

let serial = JSON.stringify(object);
console.log("Serialized string: " + serial);

let restore = JSON.parse(serial);
console.log("Restored object");
fObjLoop(restore);