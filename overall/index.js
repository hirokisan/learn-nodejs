const os = require('os');
const dateformat = require('dateformat');

console.log(os.homedir());

let now = new Date();
let date = dateformat(now, 'yyyy-mm-dd-HH-MM');

console.log(date);
