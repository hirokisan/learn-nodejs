const dir = './files/';
const fs = require('fs');
const path = require('path');

exports.get = async () => {
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

  return obj;
}
