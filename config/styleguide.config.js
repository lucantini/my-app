const webpackConfig = require('./webpack.config.dev.js');

module.exports = {
    webpackConfig,
    components: '../src/components/**/*.js',
    styleguideDir: '../docs/',
};
