const utils = require("../utils/utils");
const world = require("../po/world");
const outline = require("../utils/outline");

const introSlides = require("../data/homePage/introSlideData");
const parser = require('../utils/poParser');
const flexBoxHotData = require('../data/careersPage/hotListData');


describe(`Verify Carrers page`, () => {
    beforeEach(async () => {
        await utils.leftNavBarClick('Careers');
    });

    describe(`Verify Header section`, () => {
        const header = world["Careers Page"].header;
        it(`Verify Header Current page title`, async () => {
            await utils.expectElementText(header.currentPageTitle, 'Careers');
        });

        it(`Verify Header navigation route`, async () => {
            await utils.expectElementTextList(header.navPagesList, 'HOME > CAREERS');
        });
    });

    describe(`Verify Center Block`, () => {
        const centerBlock = world["Careers Page"].centerBlock;
        it(`Verify Center Block title`, async () => {
            await utils.expectElementText(centerBlock.title, 'Live your passion. Share ours.');
        });

        it(`Verify Center Block note`, async () => {
            await utils.expectElementText(centerBlock.note, 'If you’re a talented, open-minded, creative thinker who is ready to drive innovation and help deliver legendary games, then you’ve come to the right place.');
        });

        it(`Verify Center Block button`, async () => {
            await utils.waitElementVisible(centerBlock.button, 'Button');
        });
    });

    describe(`Verify Flex Box section`, () => {
        const flexBox = world["Careers Page"].flexBox;
        it(`Verify title in flex Box #1`, async () => {
            await utils.expectElementText(flexBox.box1Title, 'Work at Wargaming');
        });
        it(`Verify note in flex Box #1`, async () => {
            await utils.expectElementText(flexBox.box1Note, 'Be part of a global, internationally diverse family of over 4,500 people in 20+ locations. Become a trusted and recognized member of a constantly evolving team, where your creativity can flourish and there is always room to grow.');
        });
        it(`Verify links in flex Box #1`, async () => {
            await utils.expectElementTextList(flexBox.linksList, 'How to Apply? > Cyprus Relocation Program');
        });

        it(`Verify photo is visible in flex Box #2`, async () => {
            await utils.waitElementVisible(flexBox.box2photo, 'Photo');
        });
        it(`Verify name is visible in flex Box #2`, async () => {
            await utils.waitElementVisible(flexBox.box2Name);
        });
        it(`Verify company is visible in flex Box #2`, async () => {
            await utils.waitElementVisible(flexBox.box2Company);
        });
        it(`Verify text is visible in flex Box #2`, async () => {
            await utils.waitElementVisible(flexBox.box2Text);
        });

        outline(flexBoxHotData, (hotData) => {
            it(`Verify number`, async () => {
                await utils.expectElementText(flexBox.hotNumber, hotData.number, 'Number', hotData.index);
            });
            it(`Verify text`, async () => {
                await utils.expectElementText(flexBox.hotText, hotData.text, 'Text', hotData.index);
            });
            it(`Verify linkText`, async () => {
                await utils.expectElementText(flexBox.hotLink, hotData.linkText, 'linkText', hotData.index);
            });

        });
    });
    describe(`Verify Jobs section`, () => {
        const jobs = world["Careers Page"].jobs;
        it(`Verify Jobs section title`, async () => {
            await utils.expectElementText(jobs.sectionTitle, 'Job Openings');
        });

        it(`Verify Jobs section note`, async () => {
            await utils.expectElementText(jobs.sectionNote, 'Select a city and department to filter job opening results.');
        });

        it(`Verify Cities dropdown is visible`, async () => {
            await utils.waitElementVisible(jobs.cityDropdown, 'City Dropdown');
        });
        it(`Verify Cities dopdown default value`, async () => {
            await utils.expectElementText(jobs.cityDropdown, 'All offices');
        });

        it(`Verify Departments dropdown is visible`, async () => {
            await utils.waitElementVisible(jobs.depDropdown, 'Departments Dropdown');
        });
        it(`Verify Departments dopdown default value`, async () => {
            await utils.expectElementText(jobs.depDropdown, 'All areas');
        });

        it(`Verify jobs number`, async () => {
            await utils.expectElementText(jobs.totalJobsNumber, '154');
        });

        describe(`Verify Jobs in the list have all elements visible`, () => {
            
            it(`Verify all jobs have Title`, async () => {
                const resultsCount = await utils.getElementsCount(jobs.jobsListDiv);
                utils.expectElementsCount(jobs.jobTitle, resultsCount);
            });
            it(`Verify all jobs have Department`, async () => {
                const resultsCount = await utils.getElementsCount(jobs.jobsListDiv);
                utils.expectElementsCount(jobs.jobDep, resultsCount);
            });
            it(`Verify all jobs have Office`, async () => {
                const resultsCount = await utils.getElementsCount(jobs.jobsListDiv);
                utils.expectElementsCount(jobs.jobPlace, resultsCount);
            });
        });


        describe(`Verify Jobs section filters`, () => {
            it(`Verify filter by City`, async () => {
                await utils.clickElement(jobs.cityDropdown);
                await utils.waitElementVisible(jobs.DropdownExpanded);
                await utils.expectElementText(jobs.DropdownOptionsList, 'Austin, USA', 'Austin in City filter', 1);
                await utils.clickElement(jobs.DropdownOptionsList, 'Austin in City filter', 1);
                const resultsCount = await utils.getElementsCount(jobs.jobsListDiv);
                for (let i = 0; i < resultsCount; i++) {
                    await utils.expectElementText(jobs.jobPlace, 'Austin, USA', 'Job Place', i);
                };
            });
        });
    });
});
