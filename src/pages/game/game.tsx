import { useEffect, useState } from "react";

import { BoardContext } from "./context";

import type { BoardConfig, CellItem } from "./interfaces";
import { Board, EndOfGame, WinGame } from "./components";
import { generateBoard, placeBombsInBoard } from "./helpers";

export const Game = () => {
  const [board, setBoard] = useState<CellItem[][]>([]);
  const [pendingBombs, setPendingBombs] = useState<number>(0);
  const [isGameLost, setIsGameLost] = useState<boolean>(false);

  useEffect(() => {
    /* TODO: This should be saved in local storage in config */
    const boardConfig: BoardConfig = {
      boardSize: 9,
      numOfBombs: 4,
    };
    setPendingBombs(boardConfig.numOfBombs);

    const generatedBoard = generateBoard(boardConfig.boardSize);
    const boardWithBombs = placeBombsInBoard(generatedBoard, boardConfig);

    setBoard(boardWithBombs);
  }, []);

  if (isGameLost) {
    return <EndOfGame />;
  }

  if (board.length > 0 && pendingBombs === 0) {
    return <WinGame />;
  }

  return (
    board &&
    pendingBombs && (
      <BoardContext.Provider
        value={{
          pendingBombs,
          isGameLost,
          setPendingBombs,
          setIsGameLost,
        }}
      >
        <Board board={board} />
      </BoardContext.Provider>
    )
  );
};
