import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

console.log(__dirname);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@stores': path.resolve(__dirname, 'src/stores'),
    },
  },
  server: {
    proxy: {
      'src/assets': 'http://localhost:5173'
    }
  }
})

