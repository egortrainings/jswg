'use strict';

const LeftNavBar = require('../components/global/LeftNavBar');

class BasePage {
    constructor() {

        this["LeftNavBar"] = new LeftNavBar();
    };
}

module.exports = BasePage;