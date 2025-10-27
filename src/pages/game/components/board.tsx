import { Cell } from ".";
import type { CellItem } from "../interfaces";

interface Props {
  board: CellItem[][];
  numOfBombs: number;
}

export const Board = ({ board, numOfBombs }: Props) => {
  return (
    <section className="h-screen flex flex-col gap-3 justify-center items-center">
      <section>
        <h1 className="p-2 text-2xl font-bold underline text-blue-600 ">
          Buscaminas
        </h1>
        <div className="p-2">
          <p>
            <span className="font-bold">Dimensión: </span>
            {`${board.length}x${board.length}`}
          </p>

          <p>
            <span className="font-bold">Nº bombas: </span>
            {numOfBombs}
          </p>
        </div>
      </section>

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
    </section>
  );
};
