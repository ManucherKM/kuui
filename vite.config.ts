import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'

const input = Object.fromEntries(
	glob.sync('src/**/*.{ts,tsx}', {
		ignore: ["src/**/*.stories.tsx", "src/**/*.d.ts"]
	}).map(file => [
		relative(
			'src',
			file.slice(0, file.length - extname(file).length)
		),
		fileURLToPath(new URL(file, import.meta.url))
	])
)

export default defineConfig({
	plugins: [dts(), libInjectCss(),],
	build: {
		lib: {
			entry: 'src/index.ts',
			fileName: 'index',
			formats: ['es']
		},
		copyPublicDir: true,
		rollupOptions: {
			input,
			external: ['react', 'react/jsx-runtime'],
			output: {
				globals: {
					react: 'react',
				},
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js',
			},
		},
	},
	resolve: {
		alias: {
			'@': resolve('./src'),
		},
	},
})
