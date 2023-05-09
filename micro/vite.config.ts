import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:9137/',
  plugins: [vue(),qiankun('micro', {
    useDevMode: true
  })],
   resolve: {
       alias: {
         '@': resolve(__dirname, './src'),
         '#': resolve(__dirname, './src/types'),
         utils: resolve(__dirname, './src/utils'),
         api: resolve(__dirname, './src/api')
       }
     },
     server: {
      port: 9137,
      cors: true,
      origin: 'http://localhost:9137'
     }
})
