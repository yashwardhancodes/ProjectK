import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT) || 5173, // Use Render's assigned port or default to 5173
    host: '0.0.0.0', // Ensure it binds to external access
  },
  preview: {
    port: 8080,
    host: '0.0.0.0',
  }
})
