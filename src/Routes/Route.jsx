import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../ShareComponent/Error/ErrorPage";
import Home from "../component/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import AddProject from "../Dashboard/AddProject";
import SignIn from "../component/SignIn/SignIn";
import Profile from "../component/profile/Profile";
import AdminRoute from "../PrivateRoutes/AdminRoute";

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
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <Profile />
          </AdminRoute>
        ),
      },
      {
        path: "addproject",
        element: (
          <AdminRoute>
            <AddProject />
          </AdminRoute>
        ),
      },
    ],
  },
]);
