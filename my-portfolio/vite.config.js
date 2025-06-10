import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if you're using React

export default defineConfig({
  plugins: [react()], // include your existing plugins
  base: '/Port_Folio/', // Replace 'my-portfolio' with your actual repository name
  build: {
    outDir: 'dist'
  }
})