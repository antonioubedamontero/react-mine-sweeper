import { useEffect, useState } from "react";

import type { BoardConfig, CellItem } from "./interfaces";
import { Board, EndOfGame, WinGame } from "./components";
import { generateBoard } from "./helpers";

export const Game = () => {
  const [board, setBoard] = useState<CellItem[][]>([]);
  const [pendingBombs, setPendingBombs] = useState<number | null>(null);
  const [isGameLost, setIsGameLost] = useState<boolean>(false);

  useEffect(() => {
    /* TODO: This should be saved in local storage in config */
    const boardConfig: BoardConfig = {
      boardSize: 9,
      numOfBombs: 4,
      setPendingBombs,
      setIsGameLost,
    };

    const generatedBoard = generateBoard(boardConfig);
    setBoard(generatedBoard);
    setPendingBombs(boardConfig.numOfBombs);
  }, []);

  if (isGameLost) {
    return <EndOfGame />;
  }

  if (pendingBombs === 0) {
    return <WinGame />;
  }

  return (
    board && (
      <Board
        board={board}
        setPendingBombs={setPendingBombs}
        setIsGameLost={setIsGameLost}
      />
    )
  );
};
