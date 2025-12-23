import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.VITE_PORT || 5174, // Default is 5173
    hmr: {
      overlay: false, // Disable the error overlay
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split all dependencies from node_modules into a separate vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor'; // This will create a "vendor.js" chunk
          }
        },
      },
    },
  },
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
// })
