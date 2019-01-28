'use strict';

class LeftNavBar {
        constructor(baseSelector) {
                this._baseSelector = ".intro .section-wrapper";
                this.logo = `${this._baseSelector} .logo`;
                this._navMenu = `${this._baseSelector} .menu`;
                this.itemsList = `${this._navMenu} .group > ul > li > a span`;
        };
}

module.exports = LeftNavBar;