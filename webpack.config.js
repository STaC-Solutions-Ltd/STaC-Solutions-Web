const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/app.jsx',
	output: {
		filename: 'index.js'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [
				'babel-loader',
				'eslint-loader',
			],
			resolve: {
				extensions: ['.js', '.jsx']
			}
		},
		{
			test: /\.html$/,
			use: [{
				loader: 'html-loader',
				options: {
					minimize: true
				}
			}]
		},
		{
			test: /\.css$/,
			use: [{
				loader: MiniCssExtractPlugin.loader,
				options: {
					publicPath: '../'
				}
			},
			'css-loader'
			]
		}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
		new CopyWebpackPlugin([{
			from: './src/assets',
			to: 'images'
		}]),
		new CopyWebpackPlugin([{
			from: './src/data',
			to: 'data'
		}]),
		new CopyWebpackPlugin([{
			from: './src/posts',
			to: 'posts'
		}])
	]
};