const CopyWebpackPlugin = require('copy-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin')
const path = require('path');

const options = {
    // we only generate Prod Code, as we want to test the removal of code for production.
    mode: 'production',
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].js',
        libraryTarget: 'umd',
        sourceMapFilename: '[name].js.map'
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/html/index.html', to: './index.html'}])
    ],
    module: {
        rules: [
            // TypeScript Loader
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                exclude: /(node_modules|bower_components|\.spec\.js)/,
                use: [
                    {
                        loader: 'webpack-strip-block'
                    }
                ]
            },
            {
                test: /\.ts$/,
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
    // we do require '.js' here, as the dateformat package is JS only.
    resolve: {
        extensions: ['.ts', '.js'],
    }
};

module.exports = options;
