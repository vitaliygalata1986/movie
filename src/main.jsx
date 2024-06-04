import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Selected from "./pages/Selected/Selected";
//
import Mainlayout from "./layout/MainLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// style css
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      // movie id
      {
        path: "/selectedmovie/:id",
        element: <Selected />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
