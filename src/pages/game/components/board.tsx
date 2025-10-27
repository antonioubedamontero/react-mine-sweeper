import { Cell } from ".";
import type { CellItem } from "../interfaces";

interface Props {
  board: CellItem[][];
}

export const Board = ({ board }: Props) => {
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
