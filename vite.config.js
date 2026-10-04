import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true, // <-- Tambahin baris ini supaya bisa diakses via IP jaringan
    port: 5173  // (Opsional, pastikan port tetap di 5173)
  }
})
