import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5180,
    strictPort: true,
  },
  css: {
    // Preparing for shared theme from @suncube/tailwind-config
    devSourcemap: true,
  }
})
