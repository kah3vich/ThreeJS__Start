const path = require('path')

module.exports = {
	entry: './src/app.js',
	mode: 'development',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: './dist',
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{ test: /\.glsl$/, use: 'raw-loader' },
		],
	},
}
