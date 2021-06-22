import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	base: './',
	server: {
		port: 4000,
		open: true,
		cors: true,
		// proxy: {
		//     '/api': {
		//         target: 'http://api.mki.moe:8000',
		//         changeOrigin: true,
		//         secure: false,
		//         rewrite: (path) => path.replace('/api/', '/')
		//     }
		// }
	},
})
