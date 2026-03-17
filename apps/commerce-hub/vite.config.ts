import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/suncube-commerce-edge/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
