module.exports = {
    rootUrl: 'http://localhost:6482',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },

    sets: {
        main: {
            files: "src/components/**/*.gemini.js"
        }
    }
};
