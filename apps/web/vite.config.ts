import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true, // Needed for Docker mapping
        port: 5173,
        watch: {
            usePolling: true, // Needed for Docker on Windows/Mac to catch file changes
        },
        proxy: {
            '/api': {
                target: 'http://api:8000', // Proxy API requests to backend container
                changeOrigin: true,
            }
        }
    }
})