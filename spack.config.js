const { config } = require('@swc/core/spack');

module.exports = config({
    entry: {
        web: __dirname + '/src/index.js',
    },
    output: {
        path: __dirname + '/dist',
        name: 'joypad.min.js',
    },
    options: {
        minify: true,
        jsc: {
            minify: {
                compress: {
                    defaults: false,
                },
                mangle: true,
            },
        },
    },
});
