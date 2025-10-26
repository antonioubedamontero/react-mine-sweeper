import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Game } from "./pages/game";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* TODO: Add a router */}
    <Game />
  </StrictMode>
);
