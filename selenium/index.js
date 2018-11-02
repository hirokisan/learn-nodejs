const {Builder, By, Key, until} = require('selenium-webdriver');

require('dotenv').config()

const URL = 'https://guchiatsume.com/';
const EMAIL = process.env.GUCHI_EMAIL;
const PASSWORD = process.env.GUCHI_PASSWORD;


(async () => {
  //let driver = await new Builder().forBrowser('chrome').build();
  let driver = await new Builder().forBrowser('firefox').build();
  //let driver = await new Builder().forBrowser('safari').build();

  try
  {
    await driver.get(URL);
    await driver.findElement(By.linkText('ログイン')).click();
    await driver.findElement(By.name('email')).sendKeys(EMAIL);
    await driver.findElement(By.name('password')).sendKeys(PASSWORD, Key.RETURN);
    let logout = await driver.wait(until.elementLocated(By.linkText('ログアウト')), 10000);
    await logout.click();
  }
  finally
  {
    //await driver.quit();
  }
})();
