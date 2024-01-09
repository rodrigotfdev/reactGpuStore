import React from "react";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import AppLayout from "./AppLayout";
import ProductViewMore from "./pages/ProductViewMore";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <ProductViewMore />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
