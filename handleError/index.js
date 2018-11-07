const command = require('./command');
const { performance } = require('perf_hooks');

(async () => {
  try {
    performance.mark('start');
    await command.run();
    await command.run2();
    await command.run3();
  } catch (err) {
    console.log('catch', err);
  } finally {
    performance.mark('end');
    performance.measure('time', 'start', 'end');
    let measure = performance.getEntriesByName('time');
    console.log("npm start:", measure[0].duration, "ms");
  }
})();

