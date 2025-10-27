import type { CellItem } from "./cell-item.interface";

export interface BoardConfig {
  boardSize: number;
  numOfBombs: number;
  setPendingBombs: (pendingBombs: number) => void;
  setIsGameLost: (setIsGameLost: boolean) => void;
}

export interface BoardConfigWithBoard extends BoardConfig {
  board: CellItem[][];
}
