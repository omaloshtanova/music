import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite"
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
  base: '/',
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@rr-types': path.resolve(__dirname, '.react-router/types')
    },
  },
  server: {
    proxy: {
      'src/assets': 'http://localhost:5173'
    }
  }
})

