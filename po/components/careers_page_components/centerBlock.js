'use strict';

class centerBlock {
        constructor(baseSelector = `.center-block`) {
                this._baseSelector = baseSelector;
                this.title = `${this._baseSelector} h1`;
                this.note =`${this._baseSelector} p`;
                this.button =`${this._baseSelector} button`;
        };
}

module.exports = centerBlock;