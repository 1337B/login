import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
    },
    resolve: {
        alias: {
            '@styles': '/src/styles',
            '@components': '/src/components',
            '@images': '/src/assets/images',
            '@svg': '/src/assets/svg',
            '@pages': '/src/pages',
            '@public': '/src/public',
            '@services': '/src/services',
            '@hooks': '/src/hooks',
            '@store': '/src/store',
            '@validators': '/src/validators',
            '@routes': '/src/routes',
        },
    },
})