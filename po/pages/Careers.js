'use strict';

const BasePage = require("./BasePage");

class Careers extends BasePage {
    constructor() {
        super();
        this.menuBarButtons = 'div.button-menu-bar label';

    };
}

module.exports = Careers;