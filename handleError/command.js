const exec = require('child-process-promise').exec;

exports.run = async () => {
  await exec('jaa -version')
    .then((result) => {
      if(result.stdout) {
        console.log('stdout', result.stdout);
      }

      if(result.stderr) {
        console.log('stderr', result.stderr);
      }
    })
    .catch((err) => {
      console.log('err happend');
      (async () => {
        await r2();
        await r3();
      })();
      //throw err;
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

exports.run3 = async () => {
  await exec('python ./exec.py')
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

async function r2() {
  console.log('this is r2');
}

async function r3() {
  console.log('this is r3');
}
