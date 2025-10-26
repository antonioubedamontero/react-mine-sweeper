import { useEffect, useState } from "react";

import type { CellItem } from "./interfaces";
import { Cell } from "./components";
import { generateBoard } from "./helpers";

export const Board = () => {
  const [cellItems, setCellItems] = useState<CellItem[][]>([]);

  useEffect(() => {
    /* TODO: This should be saved in local storage in config */
    const boardSize = 9;
    setCellItems(generateBoard(boardSize));
  }, []);

  return (
    cellItems && (
      <div className="h-screen flex justify-center items-center">
        <div>
          {cellItems.map((row: CellItem[], rowIndex: number) => {
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
    )
  );
};
