const chokidar = require('chokidar');

let watcher = chokidar.watch('./files/', {
  // ignores .dotfiles
  ignored: /(^|[\/\\])\../,
  persistent: true
});

watcher.on('ready',function(){

  console.log("ready watching...");

  watcher.on('all', (event, path) => {
    console.log(event, path);
  });
});
