'use strict';

const HomePage = require('./pages/HomePage');
const CareersPage = require('./pages/CareersPage');

class World {
	constructor() {
		this["Home Page"] = new HomePage();
		this["Careers Page"] = new CareersPage();
	}
}

module.exports = new World();