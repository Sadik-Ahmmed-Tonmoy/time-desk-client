import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Test from "../pages/Test/Test";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/test",
          element: <Test/>,
        },
      ],
    },
  ]);