import { Cell } from ".";
import type { CellItem } from "../interfaces";

interface Props {
  board: CellItem[][];
  setPendingBombs: (pendingBombs: number | null) => void;
  setIsGameLost: (isGameLost: boolean) => void;
}

export const Board = ({ board, setPendingBombs, setIsGameLost }: Props) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        {board.map((row: CellItem[], rowIndex: number) => {
          return (
            <div key={`row-${rowIndex}`}>
              {row.map((col: CellItem, colIndex: number) => {
                return (
                  <Cell
                    key={`cell-${rowIndex}-${colIndex}`}
                    cellItem={{
                      cellPosition: {
                        row: col.cellPosition.row,
                        col: col.cellPosition.col,
                      },
                      hasBomb: col.hasBomb,
                      setPendingBombs,
                      setIsGameLost,
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
