const utils = require("../utils/utils");
const world = require("../po/world");
const outline = require("../utils/outline");
const reporter = require('wdio-allure-reporter');

describe(`Verify Click Careers`, () => {
    it(`Click`, async () => {
        utils.leftNavBarClick('Careers');
    });

});
