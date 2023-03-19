import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueReuseTemplate from 'unplugin-vue-reuse-template/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueReuseTemplate()],
})
