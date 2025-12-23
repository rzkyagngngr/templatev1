import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    
    // Use relative paths for assets (fixes file:// CORS issues)
    base: './',
    
    // SSG Configuration
    ssgOptions: {
        script: 'async',
        formatting: 'minify',
        crittersOptions: {
            reduceInlineStyles: false,
        },
        // Generate static files for each route
        includedRoutes(paths) {
            // You can filter which routes to pre-render
            return paths.filter(i => !i.includes('/auth') && !i.includes('/login'));
        },
    },
    
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
})
