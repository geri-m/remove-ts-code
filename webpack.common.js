const CopyWebpackPlugin = require('copy-webpack-plugin');
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
            }
        ]
    },
    // we do require '.js' here, as the dateformat package is JS only.
    resolve: {
        extensions: ['.ts', '.js'],
    }
};

module.exports = options;
