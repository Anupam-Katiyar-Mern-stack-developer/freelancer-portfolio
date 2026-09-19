import {
  createBrowserRouter,
} from "react-router";

import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home";
import About from "../pages/About";

export const router =
  createBrowserRouter([
    {
      element: <PublicLayout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
           path: "/about",
          element: <About />,
        }
      ],
    },
  ]);