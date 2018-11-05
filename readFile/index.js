const dir = './files/';
const fs = require('fs');
const path = require('path');

let obj = [];

fs.readdirSync(dir).forEach(file => {
  let childObj = {};
  let content = fs.readFileSync(dir+file, 'utf-8');
  content = content.replace(/\r?\n/g,"");
  let splitContent = content.split(' ');

  childObj.year  = splitContent[0];
  childObj.date = splitContent[1];
  childObj.time = splitContent[2];
  childObj.name = splitContent[3];
  childObj.number  = path.basename(file, path.extname(file));

  obj.push(childObj);
});

console.log(obj[0]);
console.log(obj[0]['year']);

obj.forEach((item, i) => {
  console.log(item);
  console.log(i);
});
