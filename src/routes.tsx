import { Home } from "./pages/Home";
import { Playground } from "./pages/Playground";
import { createBrowserRouter } from "../node_modules/react-router-dom/dist/index";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/playground",
    element: <Playground />,
  },
]);
