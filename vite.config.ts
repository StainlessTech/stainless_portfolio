import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
  alias: {
    "@": path.resolve(__dirname, "./"),
    "@/components": path.resolve(__dirname, "./components"),
    "@/lib": path.resolve(__dirname, "./lib"),
    "@/styles": path.resolve(__dirname, "./styles")
  }
},
  build: {
    target: 'ES2022'
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})