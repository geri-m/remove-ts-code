const merge = require('webpack-merge');
const parentWebPack = require('./webpack.common.js');

module.exports = merge(parentWebPack, {
    mode: 'development',
    // FIX: Module not found: Error: Can't resolve 'fs'
    node: {fs: 'empty'},
    // ATTENTION: If we change this, the integration pages are not shown any more
    devtool: 'inline-source-map'
});
