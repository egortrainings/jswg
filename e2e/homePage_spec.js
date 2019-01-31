const utils = require("../utils/utils");
const world = require("../po/world");
const outline = require("../utils/outline");
const introSlides = require("../data/homePage/introSlideData");
const parser = require('../utils/poParser');
const EC = protractor.ExpectedConditions;


describe(`Verify Home page`, () => {
    beforeEach(async () => {
        await browser.driver.get("https://wargaming.com/en/");
    });

    describe(`Verify Intro section`, () => {
        outline(introSlides, (slide) => {
            describe(`Verify elements for Slide: ${slide.number}`, () => {
                console.log(slide);
                it(`Verify Image for Slide: ${slide.number}`, async () => {
                    const paging = world["Home Page"].introSlide.paging;
                    await browser.wait(EC.visibilityOf(element(by.css(paging))), browser.params.timeout, "Paging is not visible");
                    await element(by.css(paging.pages)).click();

                    // it(`Verify Intro slide `, async () => {
                    //     utils.leftNavBarClick('Careers');
                    //     expect(2).toBe(3);
                });

            });
        });
    });
});
