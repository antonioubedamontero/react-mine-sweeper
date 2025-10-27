import { Link } from "react-router";

export const Instructions = () => {
  return (
    <section className="p-4 h-screen">
      <h1 className="mb-10 text-center text-2xl text-bold underline">
        Instrucciones:
      </h1>

      <div className="h-full flex flex-col gap-6">
        <p>
          El objetivo del juego es descubrir todas las minas. Si caes en una
          casilla donde hay una mina, ésta estallará y perderás la partida.
        </p>

        <p>
          Para evitarlo debes colocar una bandera donde creas que hay una mina.
          Ganarás si todas las minas han sido descubiertas.
        </p>

        <div>
          <h2 className="mb-4 text-xl underline">Controles del juego:</h2>
          <ul className="p-4 border-2 rounded-2xl border-gray-400 bg-amber-50">
            <li>
              <span className="font-bold">Click del ratón:</span> Pulsar en una
              casilla.
            </li>
            <li>
              <span className="font-bold">Click derecho del ratón:</span>{" "}
              Colocar / quitar una bandera.
            </li>
          </ul>
        </div>

        <p>
          Pulsa en el botón siguiente para configurar las dimensiones del
          tablero y el número de bombas asociado a las dimensiones.
        </p>

        <button className="p-2 text-white self-center cursor-pointer w-fit border-2 border-gray-400 bg-blue-400 hover:bg-blue-500 rounded-2xl">
          <Link to="/config">Configurar</Link>
        </button>
      </div>
    </section>
  );
};
