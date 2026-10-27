import { defineConfig } from 'vite';
export default defineConfig({
  server: { port: 4310, strictPort: true, open: true },
  preview: { port: 4311, strictPort: true },
});
