'use strict';

class header {
        constructor(baseSelector = `.breadcrumbs`) {
                this._baseSelector = baseSelector;
                this.currentPageTitle = `${this._baseSelector} h2`;
                this.navPagesList =`${this._baseSelector} li`;
        };
}

module.exports = header;