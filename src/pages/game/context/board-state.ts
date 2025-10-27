export interface BoardState {
  pendingBombs: number;
  isGameLost: boolean;

  setPendingBombs: (pendingBombs: number) => void;
  setIsGameLost: (isGameLost: boolean) => void;
}
