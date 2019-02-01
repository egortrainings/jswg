
'use strict';

class Paging {
        constructor(baseSelector) {
                this.pagingDiv = baseSelector;
                this.prev = `${this.pagingDiv} .prev`;
                this.pages = `${this.pagingDiv} .circles span`;
                this.next = `${this.pagingDiv} .next`;
                this.pagesTotal = `${this.pagingDiv} .pages`;
                this.pagesCurrent = `${this.pagesTotal} .pages b`;
        };
}

module.exports = Paging;
