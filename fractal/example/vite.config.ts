import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      modules: fileURLToPath(new URL('./src/modules', import.meta.url)),
      shared: fileURLToPath(new URL('./src/shared', import.meta.url)),
      app: fileURLToPath(new URL('./src/app', import.meta.url)),
    },
  },
});
