import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
	mode: 'production',
	entry: './src/index.ts',
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'index.css',
			chunkFilename: '[id].css',
		}),
	],
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		clean: true,
	},
	resolve: {
		extensions: ['.ts', '.tsx'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	externals: {
		react: 'react',
	},
	module: {
		rules: [
			// TypeScript
			{
				test: /\.(ts|tsx)?$/,
				use: ['ts-loader'],
				exclude: [/node-modules/, /.storybook/],
			},

			// Styles
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
}
