import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  esbuild: { jsx: 'automatic' },
  build: {
    license: { fileName: 'licenses.txt' },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.endsWith('/three.core.js')) return 'three-core';
        }
      }
    }
  }
});
