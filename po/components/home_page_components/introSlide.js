'use strict';
const Paging = require('../global/Paging');

class introSlide {
        constructor(baseSelector = `div#intro_slide`) {
                this._baseSelector = baseSelector;
                this.slidesList = `${this._baseSelector} .swiper-slide`;
                this.slideImage = `${this.slidesList} .background`
                this.slideNumber = `${this.slidesList} > span`;
                this.slideTitle = `${this.slidesList} h1 > span:nth-child(1)`;
                this.slideNote = `${this.slidesList} p`;
                this.slideBtn = `${this.slidesList} button`;         
                this.paging = new Paging(`${this._baseSelector} .paging`);      
        };
}

module.exports = introSlide;