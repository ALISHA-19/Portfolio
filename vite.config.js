import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path: '/Portfolio/' for the GitHub Pages project site (alisha-19.github.io/Portfolio/),
// '/' for local dev and root-served hosts like Netlify. Toggled by the GH_PAGES env var in CI.
const base = process.env.GH_PAGES === 'true' ? '/Portfolio/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
