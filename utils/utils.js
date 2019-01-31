'use strict';

const world = require('../po/world');
const browserConfigs = require('../data/browserConfigs');

const leftNavBarClick = async (item) => {
    const HomePage = world["Home Page"];

    await browser.driver.manage().window().maximize();
    await browser.driver.get("https://wargaming.com/en/");

    const targetItem = await element.all(by.css(HomePage.LeftNavBar.itemsList)).filter(async x => {
        if (await x.getText() === item) {
            return x;
        }
    });
    await targetItem[0].click();
};
const getBrowser = (browserName, instances) =>{
    if (!browserName) {
        browserName = 'chrome';
    };

    const browser = browserConfigs[browserName];
    if (instances) {
        browser.maxInstances = instances;
        browser.shardTestFiles = true;
    };
    console.log(browser);
    return browser;
};

module.exports = {
    leftNavBarClick,
    getBrowser
};