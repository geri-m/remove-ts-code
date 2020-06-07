const merge = require('webpack-merge');
const parentWebPack = require('./webpack.common.js');
const path = require('path');

module.exports = merge(parentWebPack, {
    entry: {
        "./Option": path.join(__dirname, './src/js/Option02.ts')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                exclude: /(node_modules|bower_components|\.spec\.js)/,
                use: [
                    {
                        loader: 'webpack-strip-block'
                    }
                ]
            }
        ]
    }
});
