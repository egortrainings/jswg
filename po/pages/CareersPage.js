'use strict';

const BasePage = require("./BasePage");
const Header = require("../components/global/header");
const CenterBlock = require("../components/careers_page_components/centerBlock");
const Jobs = require("../components/careers_page_components/Jobs");
const FlexBox = require("../components/careers_page_components/flexBox");
const Footer = require("../components/global/footer");

class CareersPage extends BasePage {
    constructor() {
        super();
        this.header = new Header();
        this.centerBlock = new CenterBlock();
        this.flexBox = new FlexBox();
        this.footer = new Footer();
        this.jobs = new Jobs();
    };
}

module.exports = CareersPage;