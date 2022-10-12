import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import markdown from 'vite-plugin-md'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'development' ? '/' : '/tailwind-examples/',
  plugins: [
    vue({ 
      include: [/\.vue$/, /\.md$/] 
    }),
    pages({ 
      dirs: 'src/views',
      extensions: ['vue', 'js', 'md']
    }),
    layouts(),
    markdown()
  ],
  resolve: {
    alias: { 
      '@' : path.resolve(__dirname, './src'),
      '~' : path.resolve(__dirname) 
    }
  }
})