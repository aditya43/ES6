import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
let inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: 'src/main.js',
    plugins: [buble()],
    sourceMap: 'inline',
    output:
    {
        file: 'out/bundle.js',
        format: 'es'
    }
}

if (inProduction)
{
    module.exports.plugins.push(uglify());
    delete module.exports.sourceMap;
}