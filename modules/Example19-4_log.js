let log = {
    add: function (pInfo) {
        console.log(`Info: pInfo)`);
    },
    info: function (pInfo) {
        console.log(`Info: ${pInfo}`);
    },
    warning: function (pInfo) {
        console.log(`Warning: ${pInfo}`);
    },
    error: function (pInfo) {
        console.log(`Error: ${pInfo}`);
    }
};

module.exports = log;