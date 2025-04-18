import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,       // expose to network
    port: 5173,       // (optional) default is 5173
  },
  // server: {
  //   host: '0.0.0.0', //  Binds to all network interfaces
  //   port: 5173,
  // }
  
})
