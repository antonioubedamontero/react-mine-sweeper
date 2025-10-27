import type { CellItem, ConfigInfo } from "../interfaces";

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

export const placeBombsInBoard = (
  board: CellItem[][],
  configInfo: ConfigInfo
): CellItem[][] => {
  let newBoard = structuredClone(board);
  let pendingBombs = configInfo.numOfBombs;

  while (pendingBombs > 0) {
    const row = Math.floor(Math.random() * configInfo.boardSize);
    const col = Math.floor(Math.random() * configInfo.boardSize);

    if (!newBoard[row][col].hasBomb) {
      newBoard[row][col].hasBomb = true;
      pendingBombs--;
      console.log("bomb", { row, col });
    }
  }

  return newBoard;
};
