
'use strict';

class Paging {
        constructor(baseSelector) {
                this._baseSelector = baseSelector;
                this.prev = `${this._baseSelector} .prev`;
                this.pages = `${this._baseSelector} .circles span`;
                this.next = `${this._baseSelector} .next`;
                this.pagesTotal = `${this._baseSelector} .pages`;
                this.pagesCurrent = `${this.pagesTotal} .pages b`;
        };
}

module.exports = Paging;
