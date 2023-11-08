const DELAY = 3;
let fDone = function fDone() {
    console.log("Callback completed");
}


function fDelay(pDuration, fCallback) {
    let dtStart = new Date();
    console.log("Start = " + dtStart);
    let dtNow = dtStart;
    while (dtNow - dtStart < pDuration * 1000) {
        dtNow = new Date();
    }
    console.log("End = " + dtNow);
}

fDelay(DELAY, fDone);

