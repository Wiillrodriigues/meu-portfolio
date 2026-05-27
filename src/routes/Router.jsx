import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// Se a variável de ambiente estiver vazia, usamos o nome real do repositório como fallback seguro
const repoName = import.meta.env.VITE_REPO_NAME || "meu-portfolio";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ],
  { basename: `/${repoName}` } // Agora isso vai virar "/meu-portfolio" com total segurança
);