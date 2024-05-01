import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  // ... other configuration options
  plugins: [react()],
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed
    minify: 'terser', // Enable minification using Terser
  },
});
