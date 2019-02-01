'use strict';

const BasePage = require("./BasePage");
const IntroSlide = require("../components/home_page_components/introSlide");

class HomePage extends BasePage {
    constructor() {
        super();
        this.introSlide = new IntroSlide();
     };
};

module.exports = HomePage;