import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from network devices
    port: 5173,
    proxy:
    {
      // '/api': 'http://localhost:8000'
      '/api': 'https://mern-chat-app-9alu.onrender.com'
    }   
  },
})
