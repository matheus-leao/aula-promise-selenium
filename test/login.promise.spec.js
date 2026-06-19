const { Builder, By, until } = require("selenium-webdriver");

describe("Login com Selenium usando promise chain", function () {
  this.timeout(30000);

  let driver;

  before(function () {
    return new Builder()
      .forBrowser("chrome")
      .build()
      .then((createdDriver) => {
        driver = createdDriver;
      });
  });

  after(function () {
    if (!driver) {
      return undefined;
    }

    return driver.quit();
  });

  it("deve permitir logar no Sauce Demo", function () {
    return driver
      .get("https://www.saucedemo.com/")
      .then(() => {
        ()=> {driver.findElement(By.id("user-name")).sendKeys("standard_user")};
        ()=> {driver.findElement(By.id("password")).sendKeys("secret_sauce")};
        ()=> {driver.findElement(By.id("login-button")).click()};
        ()=> {driver.wait(until.urlContains("inventory.html"), 10000)};
        ()=> {
          driver.getTitle().then((title) => {
          if (!title.includes("Swag Labs")) {
            throw new Error(`Título inesperado: ${title}`);
          }
        });
        }
      })
        
  });
});
