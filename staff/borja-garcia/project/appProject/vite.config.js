import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: { 
    exclude: ['node_modules/.cache'],
    force: true,
  },
  server: {
    proxy: {
      "/api":{
        target: "http://localhost:4321", // Dirección del backend
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""), // Elimina el prefijo /api
      }},
  },
});
