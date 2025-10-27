import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router/dom";

import "./index.css";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  // TODO: Uncomment strict mode
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
