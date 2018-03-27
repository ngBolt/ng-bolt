exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 11000,
    specs: [
        'components/checkboxradio.protractor.js'
    ],
    capabilities: {
        'browserName': 'firefox'
    },
    framework: 'mocha',
    mochaOpts: {
        reporter: "spec",
        slow: 3000
    }
};