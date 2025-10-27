import { Link } from "react-router";

export const WinGame = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="p-2 text-blue-600 ">
        ¡Enhorabuena! Has ganado la partida
      </h1>

      <button className="p-2 border-2 bg-blue-300 hover:bg-blue-400 border-gray-500 rounded-xl cursor-pointer">
        <Link to="/">Jugar de nuevo</Link>
      </button>
    </section>
  );
};
