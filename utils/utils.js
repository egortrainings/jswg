'use strict';

const EC = protractor.ExpectedConditions;
const world = require('../po/world');
const Header = require('../po/components/global/header');

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

const openHome = async () => {
    await browser.driver.manage().window().maximize();
    await browser.driver.get("https://wargaming.com/en/");
};


const leftNavBarClick = async (item) => {
    const HomePage = world["Home Page"];
    const header = new Header();

    await browser.driver.manage().window().maximize();
    await browser.driver.get("https://wargaming.com/en/");

    const targetItem = await element.all(by.css(HomePage.LeftNavBar.itemsList)).filter(async x => {
        if (await x.getText() === item) {
            return x;
        }
    });

    await browser.wait(ECHelper(targetItem[0],"clickable"));
    await targetItem[0].click();
    await expectElementText(header.currentPageTitle, item);
};
/**
 * Expects 
 * @param cssSelector 
 * @param pages - text splitted by >
 */
const expectElementTextList = async (cssSelector, pages) => {
    const expectedPagesArray = pages.split(" > ");
    for (let i = 0; i < expectedPagesArray.length; i++) {
        await expectElementText(cssSelector,expectedPagesArray[i], expectedPagesArray[i], i);
    }   
};
/**
 * Expects count of elements within specified css selector
 * @param cssSelector - css Selector
 */
const expectElementsCount = async (cssSelector, number) => {

    const elementCount = await element.all(by.css(cssSelector)).count();
    expect(elementCount).toBe(number);
};
/**
 * Returns count of elements within specified css selector
 * @param cssSelector - css Selector
 */
const getElementsCount = async (cssSelector) => {
    let elementCount = 0;
    await waitElementAllVisible(cssSelector);
    elementCount = await element.all(by.css(cssSelector)).count();
    return elementCount;
};
/**
 * Expects that element has expected text
 * @param cssSelector - css Selector of element
 * @param expectedText - expected text of element
 * @param elementName - optional element name
 * @param index - index of element, required if there are multiple elements with the same css Selector
 */
const expectElementText = async (cssSelector, expectedText, elementName ='Element', index) => {
    let elementText = '';
    await waitElementVisible(cssSelector, elementName, index);

    if (index !== undefined && index !== null) {
        elementText = await element.all(by.css(cssSelector)).get(index).getText();
    } else {
        elementText = await element(by.css(cssSelector)).getText();
    }
    expect(elementText).toEqual(expectedText);
};

/**
 * Expects that specified attribute has expected value
 * @param cssSelector - css Selector of element
 * @param attr - element attribute
 * @param expectedValue - expected value in the specified attribute
 * @param elementName - optional element name
 * @param index - index of element, required if there are multiple elements with the same css Selector
 */
const expectElementAttr = async (cssSelector, attr, expectedValue, elementName = 'Element', index) => {

    await waitElementVisible(cssSelector, elementName, index);
    let attrValue = '';
    if (index !== undefined && index !== null) {
        attrValue = await element.all(by.css(cssSelector)).get(index).getAttribute(attr);        
    } else {
        attrValue = await element(by.css(cssSelector)).getAttribute(attr);       
    };
    expect(attrValue).toEqual(expectedValue);
};
/**
 * Clicks on Element or Element in List by its index
 * @param cssSelector -css Selector for element(s)
 * @param elementName - optional element name
 * @param index - index of element, required if there are multiple elements with the same css Selector
 */
const clickElement = async (cssSelector, elementName = 'Element', index) => {
    await waitElementVisible(cssSelector, elementName, index);
    if (index !== undefined && index !== null) {
        await element.all(by.css(cssSelector)).get(index).click();
    } else {
        await element(by.css(cssSelector)).click()
    };
   
};
/**
 * Waits for element to be visible
 * @param cssSelector -css Selector for element(s)
 * @param elementName - optional element name
 * @param index - index of element, required if there are multiple elements with the same css Selector
 */
const waitElementVisible = async (cssSelector, elementName = 'Element', index) => {
    if (index !== undefined && index !== null) {
        await browser.wait(ECHelper(element.all(by.css(cssSelector)).get(index), "visible"), browser.params.timeout, `${elementName} with index: ${index} is not visible`);
    } else {
        await browser.wait(ECHelper(element(by.css(cssSelector)), "visible"), browser.params.timeout, `${elementName} is not visible`);
    };
};
/**
 * Waits for all elements within specified selector to be visible
 * @param cssSelector - css Selector for multiple elements
 * @param elementName - optional element name
 */
const waitElementAllVisible = async (cssSelector, elementName = 'Elements') => {
    await element.all(by.css(cssSelector)).each(async (elem, index) => {
        await browser.wait(ECHelper(elem, "visible"), browser.params.timeout, `${elementName} with index: ${index} is not visible`);
    });
};



module.exports = {
    ECHelper,
    leftNavBarClick,
    waitElementVisible,
    expectElementText,
    expectElementAttr,
    clickElement,
    openHome,
    expectElementTextList,
    getElementsCount,
    expectElementsCount
};