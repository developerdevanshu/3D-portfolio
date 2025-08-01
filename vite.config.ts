import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ required for Netlify
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
