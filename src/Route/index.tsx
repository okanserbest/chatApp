import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

import DefaultLayout from "../Layout/DefaultLayout";
import Dashboard from "../Component/Pages/Dashboard/Dashboard";
import NotFound from "../Component/Pages/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
  {
    path: "/",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },

    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
