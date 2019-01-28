'use strict';

const HomePage = require('./pages/HomePage');
const Careers = require('./pages/Careers');

class World {
	constructor() {
		this["Home Page"] = new HomePage();
		this["Careers"] = new Careers();
	}
}

module.exports = new World();