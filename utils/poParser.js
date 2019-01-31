'use strict';

const world = require('../po/world');

const parser = (browserElement) => {
    const elementsArray = browserElement.split(" > ");
    let finalElement;
    let index;
    elementsArray.map(value => {
        if (finalElement === undefined) {
            finalElement = world[value];
        } else {
            if (value.includes("#")) {
                finalElement = finalElement[value.substr(value.indexOf('of') + 3)];
                index = parseFloat(value.match('\\d+')[0]) - 1;
            } else {
                finalElement = finalElement[value];
            }
        }
    });

    return index ?
        element.all(by.css(finalElement)).get(index) :
        element(by.css(finalElement));
};

module.exports = {
    parser
};