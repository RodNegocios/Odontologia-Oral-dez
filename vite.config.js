import { defineConfig } from 'vite';

export default defineConfig({
  root: 'app',
  base: './',
  esbuild: { jsx: 'automatic' },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
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
