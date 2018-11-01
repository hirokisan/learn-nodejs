const childProcess = require('child_process');

childProcess.exec('ls -la', (error, stdout, stderr) => {
  if(error) {
    console.log(stderr);
    return;
  }
  else {
    console.log(stdout);
  }
});
