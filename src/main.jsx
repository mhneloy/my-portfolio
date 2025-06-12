import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout/Layout.jsx";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Route.jsx";
import ContextProvider from "./ShareComponent/AuthContext/ContextProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <ContextProvider>
      <RouterProvider router={route}>
        <Layout />
      </RouterProvider>
    </ContextProvider>
  </StrictMode>
);
