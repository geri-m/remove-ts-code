const merge = require('webpack-merge');
const parentWebPack = require('./webpack.common.js');
const path = require('path');

module.exports = merge(parentWebPack, {
    entry: {
        "./Option": path.join(__dirname, './src/js/Option01.ts')
    },
});
