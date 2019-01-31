'use strict';
const path = require("path");
const yargs = require("yargs").argv;
const fs = require("fs");
const defaultTimeout = 40 * 1000;
const browserConfigs = require('./data/browserConfigs');
//const utils = require('./utils/utils');

const getBrowser = (browserName, instances) =>{
    if (!browserName) {
        browserName = 'chrome';
    };

    const browser = browserConfigs[browserName];
    if (instances) {
        browser.maxInstances = instances;
        browser.shardTestFiles = true;
    };
    console.log(browser);
    return browser;
};
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: getBrowser(yargs.br, yargs.inst),
    restartBrowserBetweenTests: false,
    specs: [
        `e2e/${yargs.tag || "*.js"}`
    ],

    plugins: [
    ],

    onPrepare: async function () {
        const session = await global.browser.getSession();
        global.browser.params.sessionId = await session.getId();
        browser.ignoreSynchronization = true;

        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer.from(png, 'base64')
                }, 'image/png')();
                done();
            });
        });

        const AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

    },
    beforeLaunch: function () {
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        realtimeFailure: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    },
    params: {
        sessionId: null,
        timeout: defaultTimeout
    },
    localSeleniumStandaloneOpts: {
        jvmArgs: ["-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.141.5.exe"]
    }
};