'use strict';

class flexBox {
    constructor(baseSelector = `.flex-box`) {
        this._baseSelector = baseSelector;

        this._box1 = `${this._baseSelector} .col-1`;
        this.box1Title = `${this._box1} h2`;
        this.box1Note = `${this._box1} .block_title p`;
        this.linksList = `${this._box1} .block_title a`;

        this._box2 = `${this._baseSelector} .col-2`;
        this.box2photo = `${this._box2} .photo`;
        this.box2City = `${this._box2} .city`;
        this.box2Name = `${this._box2} .name`;
        this.box2Company = `${this._box2} .company`;
        this.box2Text = `${this._box2} p`;

        this._hotLine = `${this._baseSelector} .hot-line`;
        this.hotBoxList = `${this._hotLine} .block`;
        this.hotNumber = `${this.hotBoxList} .hot`;
        this.hotText = `${this.hotBoxList} .text`;
        this.hotLink = `${this.hotBoxList} .link`;

        this.banner = `${this._baseSelector} .banner`;
        this.bannerIcon = `${this.banner} .icon`;
        this.bannerText = `${this.banner} h3`;
    };
}

module.exports = flexBox;