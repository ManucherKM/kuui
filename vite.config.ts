import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
	plugins: [dts()],
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'kuui',
			fileName: 'index',
		},
		rollupOptions: {
			external: ['react'],
			output: {
				globals: {
					react: 'react',
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve('./src'),
		},
	},
})
