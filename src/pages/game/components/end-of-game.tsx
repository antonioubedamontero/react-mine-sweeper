import { Link } from "react-router";

export const EndOfGame = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="p-2 text-red-500 ">La mina ha explotado. Perdiste.</h1>

      <button className="p-2 border-2 bg-blue-300 hover:bg-blue-400 border-gray-500 rounded-xl cursor-pointer">
        <Link to="/">Jugar de nuevo</Link>
      </button>
    </section>
  );
};
