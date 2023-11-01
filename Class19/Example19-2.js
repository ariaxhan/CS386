const evt = require('events');
const evtEmit = new evt();

evtEmit.on('start', function () {
    console.log(`Started on ${Date()}`);
})

evtEmit.on('end', fEnd);
function fEnd() {
    console.log(`Ended on ${Date()}`);
}

evtEmit.emit('start');
setTimeout(function () {
    evtEmit.emit('end');
}, 5000);