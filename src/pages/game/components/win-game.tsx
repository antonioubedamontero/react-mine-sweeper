import { Link } from "react-router";

export const WinGame = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <div className="p-2 text-blue-600 ">
        ¡Enhorabuena! Has ganado la partida
      </div>

      <button className="p-2 border-2 bg-blue-300 hover:bg-blue-400 border-gray-500 rounded-xl cursor-pointer">
        <Link to="/">Jugar de nuevo</Link>
      </button>
    </div>
  );
};
