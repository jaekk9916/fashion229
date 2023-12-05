import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use Render's PORT environment variable, default to a port for local development
const PORT = process.env.PORT || 5173;

export default defineConfig({
  base: './',
  plugins: [react({
    jsxRuntime: 'classic'
  }
  )],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: PORT, // Use the PORT environment variable provided by Render
    proxy: {
      '/api': {
        target: `http://localhost:3000`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: '../dist'
  },
});