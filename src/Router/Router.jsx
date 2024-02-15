import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Test from "../pages/Test/Test";
import Dashboard from "../pages/Dashboard/Dashboard";
import EmployeeList from "../pages/Employee/EmployeeList/EmployeeList";

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
          path: "/dashboard",
          element: <Dashboard/>,
        },
        {
          path: "/employee-list",
          element: <EmployeeList/>,
        },
        {
          path: "/test",
          element: <Test/>,
        },
      ],
    },
  ]);