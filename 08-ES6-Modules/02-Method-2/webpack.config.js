var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/main.js',
    output:
    {
        path: path.resolve(__dirname, './out'),
        filename: 'bundle.js'
    }
};