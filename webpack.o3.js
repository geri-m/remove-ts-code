const merge = require('webpack-merge');
const parentWebPack = require('./webpack.common.js');
const StringReplacePlugin = require('string-replace-webpack-plugin')
const path = require('path');

module.exports = merge(parentWebPack, {
    entry: {
        "./Option": path.join(__dirname, './src/js/Option03.ts')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: StringReplacePlugin.replace({
                        replacements: [{
                            pattern: /Logger.log(.+)/g,
                            replacement: function (_match, _p1, _offset, _string) { console.log("Replace happend"); return ""; }
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
