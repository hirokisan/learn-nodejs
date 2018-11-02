const spawn = require('child-process-promise').spawn;
const exec = require('child-process-promise').exec;

//(async () => {
//  console.log('start');
//  await spawn('node', ['./exec.js'], { capture: [ 'stdout', 'stderr' ]})
//    .then(function (result) {
//      console.log('[spawn] stdout: ', result.stdout.toString());
//    })
//    .catch(function (err) {
//      console.error('[spawn] stderr: ', err.stderr);
//    });
//  console.log('end');
//})();

(async () => {
  await exec('java -version')
  .then(result => {
    console.log('stdout', result.stdout);
    console.log('stderr', result.stderr);
  });
})();
