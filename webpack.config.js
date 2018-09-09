var VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        main: ["./src/root.js"]  ///  rosterCurrent
    },
    output: {
        path: __dirname + '/public/js/vue/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:{
                    esModule: false
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000',
                options: {
                    name: '[name].[ext]?[hash]'
                }

            }

        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
    ],

};