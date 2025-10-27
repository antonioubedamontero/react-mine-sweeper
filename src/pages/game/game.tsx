import { useEffect, useState } from "react";

import { BoardContext } from "./context";

import type { CellItem } from "./interfaces";
import { Board, EndOfGame, WinGame } from "./components";
import { generateBoard, placeBombsInBoard } from "./helpers";
import type { ConfigInfo } from "../shared/interfaces";

export const Game = () => {
  const [board, setBoard] = useState<CellItem[][]>([]);
  const [pendingBombs, setPendingBombs] = useState<number>(0);
  const [isGameLost, setIsGameLost] = useState<boolean>(false);
  const [numOfBombs, setNumOfBombs] = useState<number>(0);

  useEffect(() => {
    /* TODO: This should be saved in local storage in config */
    const boardConfig: ConfigInfo = {
      boardSize: 9,
      numOfBombs: 4,
    };
    setNumOfBombs(boardConfig.numOfBombs);
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
    board.length > 0 &&
    pendingBombs && (
      <BoardContext.Provider
        value={{
          pendingBombs,
          isGameLost,
          setPendingBombs,
          setIsGameLost,
        }}
      >
        <Board board={board} numOfBombs={numOfBombs} />
      </BoardContext.Provider>
    )
  );
};
