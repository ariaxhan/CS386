// start after 1 second, but try to always use load event in case this doesn't work
window.setInterval(fDisplayTime, 1000);

function fDisplayTime() {
    // get element by id
    let clock = document.getElementById("clock");
    // get time
    let now = new Date();
    // display current time
    clock.innerHTML = now.toLocaleTimeString();

}