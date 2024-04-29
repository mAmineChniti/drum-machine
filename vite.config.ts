import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import url from '@rollup/plugin-url';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), url()],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, '**/assets'),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  exclude: ['src/_codux/**'],
});
