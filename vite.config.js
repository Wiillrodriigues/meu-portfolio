import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  
  return {
    // Forçamos a string direto para o GitHub Pages nunca errar o caminho das assets
    base: "/meu-portfolio/", 
    plugins: [react(), tailwindcss()],
    server: {
      open: true,
      host: true, 
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});
