const command = require('./command');

(async () => {
  try {
    await command.run();
    await command.run2();
  } catch (err) {
    console.log('catch', err);
  }
})();

