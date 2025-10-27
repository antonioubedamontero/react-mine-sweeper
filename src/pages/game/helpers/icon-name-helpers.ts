import redFlag from "../../../assets/flag.svg";
import bomb from "../../../assets/bomb.svg";

import type { CellIconName } from "../interfaces";

const icons = {
  flag: redFlag,
  mine: bomb,
};

export const getIconName = (iconName: CellIconName): string | undefined => {
  return icons[iconName];
};
