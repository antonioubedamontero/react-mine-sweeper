import type { CellItem } from "../interfaces";

export const generateBoard = (boardSize: number): CellItem[][] => {
  const cellItems: CellItem[][] = [];

  for (let row = 0; row < boardSize; row++) {
    cellItems[row] = [];

    for (let col = 0; col < boardSize; col++) {
      cellItems[row][col] = {
        cellPosition: { row, col },
        hasBomb: false,
      };
    }
  }

  return cellItems;
};
