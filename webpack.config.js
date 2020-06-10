
const html_webpack_plugin = require('html-webpack-plugin')
const mini_css_extract_plugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/app.js',
	output:{
		path: __dirname + '/build',
		filename: 'bundler.js'
	},
	module: {
		rules: [
			{
				test: /\.scss/,
				use:[
				{
					loader: mini_css_extract_plugin.loader
				},
				{
					loader: 'css-loader'
				},
				{
					loader: 'sass-loader'
				}
				]
			}
		]
	},
	plugins: [
		new html_webpack_plugin({
			template: './src/index.html'
		}),
		new mini_css_extract_plugin({
			filename: 'bundle.css'
		})
	]
}
