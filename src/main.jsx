import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout/Layout.jsx";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}>
      <Layout />
    </RouterProvider>
  </StrictMode>
);
