import { useState } from "react";
import type { CellIconName, CellItem } from "../interfaces";

export const useCell = (cellItem: CellItem) => {
  const [iconName, setIconName] = useState<CellIconName | undefined>(undefined);
  const [isPressed, setIsPressed] = useState(false);

  const handleFlag = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (iconName === "mine") return;

    setIsPressed(false);

    if (iconName === "flag") {
      setIconName(undefined);
      return;
    }

    setIconName("flag");
  };

  const handleCellPressed = () => {
    const invalidClickableIcons: CellIconName[] = ["flag", "mine"];
    if (iconName && invalidClickableIcons.includes(iconName)) return;

    setIsPressed(!isPressed);

    if (cellItem.hasBomb) {
      setIconName("mine");
    }
  };

  return {
    iconName,
    isPressed,
    handleFlag,
    handleCellPressed,
  };
};
