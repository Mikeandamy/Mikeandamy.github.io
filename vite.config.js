import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // User-site repository (username.github.io) can use '/'.
  // For a project repository, change this to '/repository-name/'.
  base: '/',
})
