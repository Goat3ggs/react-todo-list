import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-todo-list/', // <- asta e cheia pentru GitHub Pages
  plugins: [
    react(),
    tailwindcss(),
  ],
})
