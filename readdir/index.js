const fs   = require('fs');
const dir  = './files/';
const path = require('path');

(async () => {
  showFiles(dir);
})();

async function showFiles(dir) {
  let files = fs.readdirSync(dir);
  files.sort(function(a, b) {
    return fs.statSync(dir + b).mtime.getTime() -
      fs.statSync(dir + a).mtime.getTime();
  });
  files.forEach(file => {
    let extension = path.extname(file);
    if(extension == '.zip'){
      console.log(file);
    }
  });
  return;
}
