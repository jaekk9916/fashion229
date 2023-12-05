import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const PORT = process.env.PORT || 5173;

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic' // Add this line
  }
  )],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: PORT,
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: '../dist/app'
  },
});
