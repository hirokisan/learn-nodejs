const stringify = require('csv-stringify');
const fs = require('fs');
const iconv = require('iconv-lite');

let input = [];
let header = [];

header.push('id');
header.push('name');
input.push(header);
input.push(['1', 'james']);

stringify(input, (err, output) => {
  fs.writeFileSync('./file/sample.csv', iconv.encode(output, 'utf-8'));
});
