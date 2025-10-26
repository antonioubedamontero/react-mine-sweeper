import { Cell } from "./components";

import type { CellItem } from "./interfaces";

export const Game = () => {
  /* TODO: This is a mock to test functionality */
  const cellItem: CellItem = {
    cellPosition: { row: 0, col: 0 },
    hasBomb: true,
  };

  return (
    <div>
      <Cell cellItem={cellItem} />
    </div>
  );
};
