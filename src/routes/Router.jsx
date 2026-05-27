import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom"; // Mudamos para HashRouter
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// Com o HashRouter, as rotas funcionam de forma relativa automática,
// eliminando a necessidade do basename para o GitHub Pages!
export const router = createHashRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);