import { Link } from "react-router";

export const EndOfGame = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <div className="p-2 text-red-500 ">La mina ha explotado. Perdiste.</div>

      <button className="p-2 border-2 bg-blue-300 hover:bg-blue-400 border-gray-500 rounded-xl cursor-pointer">
        <Link to="/config">Jugar de nuevo</Link>
      </button>
    </div>
  );
};
