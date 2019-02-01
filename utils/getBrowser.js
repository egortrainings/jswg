const browserConfigs = require('../data/browserConfigs');

const getBrowser = (browserName = 'chrome', instances) =>{
    const browser = browserConfigs[browserName];
    if (instances) {
        browser.maxInstances = instances;
        browser.shardTestFiles = true;
    };
    return browser;
};
module.exports = {
    getBrowser
}