import type { BoardConfig, CellItem, ConfigInfo } from "../interfaces";

export const generateBoard = ({
  boardSize,
  setPendingBombs,
  setIsGameLost,
}: BoardConfig): CellItem[][] => {
  const cellItems: CellItem[][] = [];

  for (let row = 0; row < boardSize; row++) {
    cellItems[row] = [];

    for (let col = 0; col < boardSize; col++) {
      cellItems[row][col] = {
        cellPosition: { row, col },
        hasBomb: false,
        setPendingBombs,
        setIsGameLost,
      };
    }
  }

  return cellItems;
};

export const placeBombsInBoard = (
  board: CellItem[][],
  configInfo: ConfigInfo
): void => {
  let pendingBombs = configInfo.numOfBombs;

  while (pendingBombs > 0) {
    const row = Math.random() * configInfo.boardSize;
    const col = Math.random() * configInfo.boardSize;

    if (!board[row][col].hasBomb) {
      board[row][col].hasBomb = true;
      pendingBombs--;
    }
  }
};
