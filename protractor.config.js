'use strict';
const path = require("path");
const yargs = require("yargs").argv;
const fs = require("fs");
const defaultTimeout = 40 * 1000;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars', 'disable-gpu',
                'test-type=browser', 'disable-notifications', 'incognito',
                'disable-application-cache']
        },
        shardTestFiles: false,
        maxInstances: 2,
    },
    restartBrowserBetweenTests: true,
    specs: [
        `e2e/${yargs.tag || "*/*.js"}`
    ],

    plugins: [
    ],

    reporters: ['allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
            useCucumberStepReporter: false
        }
    },

    onPrepare: async function () {
        const session = await global.browser.getSession();
        global.browser.params.sessionId = await session.getId();
        browser.ignoreSynchronization = true;
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
};