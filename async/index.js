const exec             = require('child-process-promise').exec;
const fs               = require('fs').promises;
const util             = require('util');
const stringify        = require('csv-stringify');
const iconv            = require('iconv-lite');
const stringifyPromise = util.promisify(stringify);

const userList = [
  'james',
  'steve',
  'john'
];

(async () => {
  console.log('start');

  userList.forEach((user) => {
    console.log(user);
  });

  await exec('ls -la')
  .then((result) => {
    console.log('ls -la');
  });

  let output = await stringifyPromise([['id','name']]);

  await fs.writeFile('./files/sample.csv', output);

  console.log('end');
})();

