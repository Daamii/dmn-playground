import { Home } from "./pages/Home";
import { Playground } from "./pages/Playground";
import { createBrowserRouter } from "../node_modules/react-router-dom/dist/index";
import React from "react";
import { Layout } from "./metacomponents/Layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
      // { index: true, element: <Home /> },
      // { path: "*", element: <NoMatch /> },
    ],
  },
]);
