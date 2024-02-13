import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/1.1': 'http://api.musixmatch.com/ws/',
    },
  },
  plugins: [react()],
});
