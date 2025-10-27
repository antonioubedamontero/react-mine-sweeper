export type CellIconName = "flag" | "mine";

export interface CellPosition {
  row: number;
  col: number;
}
export interface CellItem {
  cellPosition: CellPosition;
  hasBomb: boolean;
  setPendingBombs: (pendingBombs: number) => void;
  setIsGameLost: (isGameLost: boolean) => void;
}
