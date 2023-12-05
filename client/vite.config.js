import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const { PORT = 3000 } = process.env;

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic' // Add this line
  }
  )],
  server: {
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
