const {Builder, By, Key, until} = require('selenium-webdriver');

(async () => {
  //let driver = await new Builder().forBrowser('chrome').build();
  //let driver = await new Builder().forBrowser('firefox').build();
  let driver = await new Builder().forBrowser('safari').build();

  try
  {
    await driver.get('http://www.google.com/');
  }
  finally
  {
    await driver.quit();
  }
})();
