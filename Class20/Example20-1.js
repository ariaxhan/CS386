function fProcess() {
    setTimeout(function() {
        fDelay();
    }, 3000);
}

function fDelay() {
    console.log("Completed " + new Date());
}

console.log("Started " + new Date());
fProcess();
console.log("End " + new Date());