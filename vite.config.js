import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
  server: {
    host: true, // <-- Tambahin baris ini supaya bisa diakses via IP jaringan
    port: 5173  // (Opsional, pastikan port tetap di 5173)
  }
})
