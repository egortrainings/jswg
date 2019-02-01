'use strict';

class jobs {
        constructor(baseSelector = `.jobs`) {
                this._baseSelector = baseSelector;
                this.sectionTitle = `${this._baseSelector}  .short`;
                this.sectionNote =`${this._baseSelector} p`;

                this.cityDropdown =`${this._baseSelector} #s2id_city_filter`;
                this.depDropdown =`${this._baseSelector} #s2id_dep_filter`;

                this.DropdownExpanded = `#select2-drop`; 
                this.DropdownOptionsList = `${this.depDropdownExpanded} .select2-result-label`;

                this.totalJobsNumber =  `${this._baseSelector} .pager b`;
                this.totalJobsVacanciesText =  `${this._baseSelector} .pager span span:nth-child(2)`;

                this.jobsListDiv = `${this._baseSelector} .job-list`;
                this.jobTitle = `${this.jobsListDiv} .title`;
                this.jobDep = `${this.jobsListDiv} .description`;
                this.jobPlace = `${this.jobsListDiv} .place`;

                this.showMoreLink =  `${this._baseSelector} .show-more`;
                this.showMoreLinkText =  `${this.showMoreLink} span`;     
                
                this.bannersDiv = `${this._baseSelector} .banners`;
                this.bannersText = `${this.bannersDiv} h3`;
                this.bannersBtn = `${this.bannersDiv} .button`;
        };
};

module.exports = jobs;