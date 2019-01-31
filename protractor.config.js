'use strict';
const path = require("path");
const yargs = require("yargs").argv;
const fs = require("fs");
const defaultTimeout = 40 * 1000;
const utils = require('./utils/utils');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: utils.getBrowser(yargs.br, yargs.inst),
    restartBrowserBetweenTests: true,
    specs: [
        `e2e/${yargs.tag || "*/*.js"}`
    ],

    plugins: [
    ],

    onPrepare: async function () {
        const session = await global.browser.getSession();
        global.browser.params.sessionId = await session.getId();
        browser.ignoreSynchronization = true;

        let originalAddExpectationResult = jasmine.Spec.prototype.addExpectationResult;
        jasmine.Spec.prototype.addExpectationResult = function () {
            if (!arguments[0]) {
                browser.takeScreenshot().then(function (png) {
                    allure.createAttachment('Screenshot', function () {
                        return new Buffer(png, 'base64')
                    }, 'image/png')();
                })
            }
            return originalAddExpectationResult.apply(this, arguments);
        };

        const AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        return global.browser.getProcessedConfig().then(function (config) {
        });
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
    },
};