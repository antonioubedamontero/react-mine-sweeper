import type { CellItem } from "../interfaces";
import { getCellBackgroundClasses, getIconName } from "../helpers";
import { useCell } from "../hooks";
interface Props {
  cellItem: CellItem;
}

export const Cell = ({ cellItem }: Props) => {
  const { iconName, isPressed, handleCellPressed, handleFlag } =
    useCell(cellItem);

  return (
    <button
      className={getCellBackgroundClasses(isPressed, cellItem)}
      onClick={handleCellPressed}
      onContextMenu={(event) => handleFlag(event)}
    >
      {iconName && (
        <img
          width="32"
          height="32"
          src={getIconName(iconName)}
          alt="cell game icon"
        />
      )}
    </button>
  );
};
