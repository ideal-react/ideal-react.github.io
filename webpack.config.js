'use strict'

var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			loader: 'babel',
			exclude: /node_modules/,
		}, {
			test: /\.css$/,
			loader: 'style!css?modules&localIdentName=[local]-[hash:base64:5]!postcss',
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	postcss: [autoprefixer],
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				screw_ie8: true,
				warnings: false,
			},
		}),
	]
}
