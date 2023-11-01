function fCount() {
    let counter = 0;
    console.log(`----Static count = ${fCount.count}`);
    counter++;
    console.log(`Local variable counter = ${counter}`);
}

function main() {
    fCount.count = 0;
    for (let i = 0; i < 3; i++){
        console.log(`Iteration = ${i}`);
        fCount.count++;
        fCount();
    }
}

main();