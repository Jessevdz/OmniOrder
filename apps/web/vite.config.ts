import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true, // Needed for Docker mapping
        port: 5173,
        allowedHosts: [
            'pizza.localhost',
            'burger.localhost',
            'stelly.localhost',
            'admin.stelly.localhost',
            'all' // Or just use 'all' to disable the check entirely for dev
        ],
        watch: {
            usePolling: true,
        },
        proxy: {
            '/api': {
                target: 'http://api:8000',
                changeOrigin: true,
            }
        }
    }
})