module.exports = {
    chrome: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['disable-infobars', 'disable-gpu',
                'test-type=browser', 'disable-notifications', 'incognito',
                'disable-application-cache']
        },
        'shardTestFiles': false,
        'maxInstances': 2,
    },
    ie: {
        'browserName': 'internet explorer',
        'version':'11',
        'shardTestFiles': false,
        'maxInstances': 2,
        'ignoreProtectedModeSettings': true
    },
    firefox: {
        'browserName': 'firefox',
        'moz:firefoxOptions': {
            'args': ['--safe-mode']
        },
        'shardTestFiles': false,
        'maxInstances': 2
    }
};