import { createContext, useContext } from "react";

import type { BoardState } from "./board-state";

export const BoardContext = createContext<BoardState | null>(null);

export const useBoardContext = (): BoardState => {
  const context = useContext(BoardContext);

  if (!context) throw new Error("Board context is not defined");

  return context;
};
