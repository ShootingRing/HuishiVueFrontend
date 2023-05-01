import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   hmr: true,
  // },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "/src"),
    }
  },
  plugins: [
        vue(),
  ],
  server: {
    host: 'localhost',
    port: 8081,
    open: true,
  },
  proxyTable: {
    '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }
  },
  build: {
    outDir: 'shian'
  }
})
