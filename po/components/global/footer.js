'use strict';

class footer {
        constructor(baseSelector = `.footer`) {
                this._baseSelector = baseSelector;
                this.bannersList = `${this._baseSelector} .banner`;
                this.bannerTitle =`${this.bannersList} h3`;
                this.bannerNote =`${this.bannersList} p`;
                this.bannerBtn = `${this.bannersList} .button`;

                this.copyrights = `${this._baseSelector} .copy`;

                this.socialList = `${this._baseSelector} .js-social-links li`;
        };
}

module.exports = footer;