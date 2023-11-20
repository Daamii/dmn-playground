import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "../node_modules/react-router-dom/dist/index";
import { routes } from "./routes";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
