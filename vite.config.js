import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.MODE == 'production' ? '/tailwind-examples/' : '/',
  plugins: [vue()],
  resolve:{
    alias:{'@' : path.resolve(__dirname, './src')},
  },
})