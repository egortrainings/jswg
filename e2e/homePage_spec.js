const utils = require("../utils/utils");
const world = require("../po/world");
const outline = require("../utils/outline");
const introSlides = require("../data/homePage/introSlideData");
const parser = require('../utils/poParser');


describe(`Verify Home page`, () => {
    beforeEach(async () => {
        await utils.openHome();
    });

    describe(`Verify Intro section`, () => {
        outline(introSlides, (slideData) => {
            describe(`Verify elements for Slide: ${slideData.number}`, () => {
                const index = parseInt(slideData.number) - 1;
                const sl = world["Home Page"].introSlide;

                beforeEach(async () => {
                    const paging = sl.paging;
                    await utils.waitElementVisible(paging.pagingDiv, 'Paging');
                    await utils.clickElement(paging.pages, `slide button #${index}`, index);
                });

                it(`Verify Slide Image URL: ${slideData.number}`, async () => {
                    await utils.expectElementAttr(sl.slideImage, 'style', slideData.imageUrl, `Slide image #${index}`, index);
                });

                // it(`Verify Slide Title: ${slideData.number}`, async () => {
                //     await utils.expectElementText(sl.slideTitle, slideData.title, `Slide title #${index}`, index);
                // });

                // it(`Verify Slide note: ${slideData.number}`, async () => {
                //     await utils.expectElementText(sl.slideNote, slideData.note, `Slide note #${index}`, index);
                // });

                // it(`Verify Slide button: ${slideData.number}`, async () => {
                //     await utils.expectElementText(sl.slideBtn, slideData.button, `Slide button #${index}`, index);
                // });
                
            });
        });
    });
});
