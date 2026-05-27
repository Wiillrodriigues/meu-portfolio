import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  
  // Pegamos o nome do repositório da ENV ou usamos o valor padrão 'meu-portfolio' como fallback seguro
  const repoName = env.VITE_REPO_NAME || "meu-portfolio";

  return {
    base: `/${repoName}/`,
    plugins: [react(), tailwindcss()],
    server: {
      open: true,
      host: true, // LIBERADO: Agora você consegue acessar pelo IP no celular sempre que precisar
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
