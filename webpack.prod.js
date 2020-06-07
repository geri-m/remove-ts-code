const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const parentWebPack = require('./webpack.common.js');
const StringReplacePlugin = require('string-replace-webpack-plugin')


module.exports = merge(parentWebPack, {
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /(node_modules|bower_components|\.spec\.js)/,
                use: [
                    {
                        loader: 'webpack-strip-block'
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [{
                    loader: StringReplacePlugin.replace({
                        replacements: [{
                            pattern: /Option03/g,
                            replacement: function (_match, _p1, _offset, _string) { return "xxxx"; }
                        }]
                    })
                }]
            }
        ]
    },
    plugins: [
        // an instance of the plugin must be present
        new StringReplacePlugin()
    ]
});
