const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    stats: {
        warnings: false,
        errors: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx'],
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
        }
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|tsx|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: "swc-loader"
                }
            },
            {
                test: /\.s[ac]ss|css$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
               ]
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                loader: 'file-loader',
                options: {
                name: '[name].[ext]',
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/public/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        historyApiFallback: true,
        port: 5051,
    }
}