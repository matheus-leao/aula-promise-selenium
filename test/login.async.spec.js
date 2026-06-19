const { Builder, By, until } = require('selenium-webdriver');

describe('Login com Selenium usando async/await', function () {
  this.timeout(30000);

  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  it('deve permitir logar no Sauce Demo', async function () {
    await driver.get('https://www.saucedemo.com/');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();
    await driver.wait(until.urlContains('inventory.html'), 10000);

    const title = await driver.getTitle();

    if (!title.includes('Swag Labs')) {
      throw new Error(`Título inesperado: ${title}`);
    }
  });
});