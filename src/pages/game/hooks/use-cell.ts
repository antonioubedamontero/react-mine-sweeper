import { useState } from "react";
import type { CellIconName, CellItem } from "../interfaces";
import { useBoardContext } from "../context";

export const useCell = (cellItem: CellItem) => {
  const [iconName, setIconName] = useState<CellIconName | undefined>(undefined);
  const [isPressed, setIsPressed] = useState(false);

  const { setIsGameLost, pendingBombs, setPendingBombs } = useBoardContext();

  const handleFlag = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (iconName === "mine") return;

    setIsPressed(false);

    if (iconName === "flag") {
      if (cellItem.hasBomb) {
        setPendingBombs(pendingBombs + 1);
      }

      setIconName(undefined);
      return;
    }

    setIconName("flag");

    if (cellItem.hasBomb) {
      if (pendingBombs === 1) {
        return setTimeout(() => setPendingBombs(pendingBombs - 1), 2000);
      }
      setPendingBombs(pendingBombs - 1);
    }
  };

  const handleCellPressed = () => {
    const invalidClickableIcons: CellIconName[] = ["flag", "mine"];
    if (iconName && invalidClickableIcons.includes(iconName)) return;

    setIsPressed(!isPressed);

    if (cellItem.hasBomb) {
      setIconName("mine");

      // TODO: Discount bomb and not to game lost if adjacents
      //setPendingBombs(pendingBombs - 1);

      setTimeout(() => setIsGameLost(true), 2000);
    }
  };

  return {
    iconName,
    isPressed,
    handleFlag,
    handleCellPressed,
  };
};
