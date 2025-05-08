import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'contactform/build', // Change the build output folder to match your desired folder
  },
  base: './', // Use relative base path for GitHub Pages
})
