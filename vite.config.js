import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['axios'],
    },
  },
  resolve: {
    alias: {
      components: '/src/components',
      data: '/src/data',
      helpers: '/src/helpers',
      styles: '/src/styles',
    },
  },
});
