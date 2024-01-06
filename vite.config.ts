import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
 base: "/",
 plugins: [react()],
 preview: {
  port: 5173,
  strictPort: true,
  origin: "http://178.79.160.122:5173"
 },
 server: {
  port: 5173,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:5173",
 },
});