import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Важно для работы в контейнере Docker (который использует Railway)
    port: 3000,
  },
})