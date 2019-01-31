'use strict';

const EC = protractor.ExpectedConditions;
const world = require('../po/world');
const browserConfigs = require('../data/browserConfigs');
const parser = require('./poParser');

/**
* Returns expected condition by provided key
* @param element - element
* @param validation - key
* @param negate - negate flag
* @return {Condition}
*/
const ECHelper = (element, validation, negate) => {
    switch (validation) {
        case "present": return negate ? EC.not(EC.presenceOf(element)) : EC.presenceOf(element);
        case "clickable": return negate ? EC.not(EC.elementToBeClickable(element)) : EC.elementToBeClickable(element);
        case "visible": return negate ? EC.not(EC.visibilityOf(element)) : EC.visibilityOf(element);
        case "invisible": return negate ? EC.not(EC.invisibilityOf(element)) : EC.invisibilityOf(element);
        case "selected": return negate ? EC.not(EC.elementToBeSelected(element)) : EC.elementToBeSelected(element);
        case "gone": return negate ? EC.not(EC.stalenessOf(element)) : EC.stalenessOf(element);
        case "appear": return EC.presenceOf(element);
        case "disappear": return EC.stalenessOf(element);
        case "become visible": return EC.visibilityOf(element);
        case "become invisible": return EC.invisibilityOf(element);
        default: throw new Error("Wrong expected condition provided");
    }
};

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
    ECHelper,
    leftNavBarClick,
    //getBrowser
};