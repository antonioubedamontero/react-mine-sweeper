import { createBrowserRouter, Navigate } from "react-router-dom";

import { Instructions } from "./pages/instructions";
import { Board, Config } from "./pages/game";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Instructions,
  },
  {
    path: "/config",
    Component: Config,
  },
  {
    path: "/game",
    Component: Board,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
