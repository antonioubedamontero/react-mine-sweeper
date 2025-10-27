import type { CellItem } from "../interfaces";

export const getCellBackgroundClasses = (
  isPressed: boolean,
  cellItem: CellItem
) => {
  const commonCSSClasses = "w-8 h-8 border-2 border-gray-200";

  if (isPressed) {
    return cellItem.hasBomb
      ? commonCSSClasses.concat(" bg-red-500")
      : commonCSSClasses.concat(" bg-stone-200");
  }

  return commonCSSClasses.concat(" bg-stone-300");
};
