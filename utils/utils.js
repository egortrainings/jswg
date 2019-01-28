'use strict';

const world = require('../po/world');

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

module.exports = {
    leftNavBarClick
};