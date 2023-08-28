import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'

const plugins = [
	new MiniCssExtractPlugin({
		filename: 'index.css',
		chunkFilename: '[id].css',
	}),
]

const rules = [
	// TypeScript
	{
		test: /\.(ts|tsx)?$/,
		use: ['ts-loader'],
	},

	// Styles
	{
		test: /\.s[ac]ss$/i,
		use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
	},
]

export default {
	mode: 'production',
	entry: './src/index.ts',
	plugins,
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				terserOptions: {
					format: {
						comments: false,
					},
				},
			}),
		],
	},
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
		rules,
	},
}
