const exec = require('child-process-promise').exec;

exports.run = async () => {
  await exec('java -version')
    .then((result) => {
      if(result.stdout) {
        console.log('stdout', result.stdout);
      }

      if(result.stderr) {
        console.log('stderr', result.stderr);
      }
    })
    .catch((err) => {
      throw err;
    });
}

exports.run2 = async () => {
  await exec('node -v')
    .then((result) => {
      if(result.stdout) {
        console.log('stdout', result.stdout);
      }

      if(result.stderr) {
        console.log('stderr', result.stderr);
      }
    })
    .catch((err) => {
      throw err;
    });

  return true;
}
