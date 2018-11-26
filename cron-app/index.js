const CronJob = require('cron').CronJob;
const exec    = require('child_process').exec;

const schedule = '* * * * * *';

new CronJob(schedule, function() {
  check();
}, null, true, 'Asia/Tokyo');

function check() {
  exec('ls', (err, stdout, stderr) => {
    if(err) throw err;
    if(stdout) console.log(stdout);
    if(stderr) console.error(stderr);
  });
}
