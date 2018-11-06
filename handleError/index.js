const command = require('./command');

(async () => {
  try {
    await command.run();
    await command.run2();
    await command.run3();
  } catch (err) {
    console.log('catch', err);
  }
})();

