import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../ShareComponent/Error/ErrorPage";
import Home from "../component/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import AddProject from "../Dashboard/AddProject";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "addproject",
        element: <AddProject />,
      },
    ],
  },
]);
