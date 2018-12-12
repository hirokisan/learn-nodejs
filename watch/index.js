const fs = require('fs');
const TailingReadableStream = require('tailing-stream');
const logger = require('./logger');

const stream = TailingReadableStream.createReadStream("./file/sample.txt", {timeout: 0});

let c = 0;

stream.on('data', buffer => {
  if(c == 0){
    c++;
    return;
  }
  let content = buffer.toString();
  if ( content.match(/system/)) {
    logger.system.info(content);
  }
});
stream.on('close', () => {
  console.log("close");
});
