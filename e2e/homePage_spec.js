const utils = require("../utils/utils");
const world = require("../po/world");
const outline = require("../utils/outline");

describe("ELSE, DEV env, Header testing", () => {

    describe("ELSE, DEV env, Test cases for Header Elements per User Role", () => {

        outline(usersHeaderElementsList, (User) => {
            describe(`Verify Header Elements for: ${User.userName}`, () => {
                beforeEach(async () => {
                    await utils.loginAs(User.userName);
                });
                outline(User.header_elements, (element) => {
                    it(`Role: ${User.userName}. Verify that element is present in Header: ${element} `, async () => {
                        let elementDetails = headerElementsList.filter(el => el.name === element)[0];
                        await browser.wait(utils.ECHelper(parser.parser(`Home Page > Header > ${elementDetails.element}`), "present"), browser.params.timeout, `HomePage > Header > ${elementDetails.name} is not present.`);
                    });
                });
            });
        });
    });

});

