const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-react',
                    {
                        plugins: [
                          '@babel/plugin-proposal-class-properties',
                          '@babel/plugin-proposal-object-rest-spread'
                        ]
                    }
                ]
            },
            //regular expression; tells babel to run in js files
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
};