import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub project Pages: https://<user>.github.io/<repository>/
// Use lowercase — GitHub’s canonical Pages URL paths are lowercase even if repo name mixes case.
const ghPages = process.env.GH_PAGES === '1'
const pagesBase = '/aspen.github.io/'

// https://vite.dev/config/
export default defineConfig({
  base: ghPages ? pagesBase : '/',
  plugins: [react(), tailwindcss()],
  build: ghPages
    ? {
        outDir: 'docs',
        emptyOutDir: true,
      }
    : undefined,
})
