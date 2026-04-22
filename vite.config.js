import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api/chat': {
        target: 'http://127.0.0.1:5001/election-guide-a69dd/us-central1/chat', // Change this to your deployed function URL if not using emulator
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/chat/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
