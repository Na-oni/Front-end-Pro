const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: [path.join(__dirname, './src/main.js'), path.join(__dirname, './src/sass/main.scss')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset',
            },
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Шаблон HTML
            filename: 'index.html', // Название выходного HTML
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminGenerate,
                    options: {
                        plugins: [
                            ['imagemin-mozjpeg', { quality: 75 }],
                            ['imagemin-pngquant', { quality: [0.65, 0.8] }],
                            ['imagemin-gifsicle', { optimizationLevel: 2 }],
                            ['imagemin-svgo', { plugins: [{ removeViewBox: false }] }],
                        ],
                    },
                },
            }),
        ],
    },
    devServer: {
        static: './dist',
        hot: true,
        open: true,
    },
    watch: true,
};