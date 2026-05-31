import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  
  return {
    // Essa linha diz ao compilador para ajustar todos os caminhos do index.html para o GitHub Pages
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