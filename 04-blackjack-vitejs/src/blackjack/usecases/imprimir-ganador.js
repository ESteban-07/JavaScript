import { puntosJugadores } from "../";
import { desplegarAlerta } from "./";

export const imprimirGanador = () => {
  const [puntosJugador, puntosComputadora] = puntosJugadores;

  if (puntosJugador <= 21) {
    if (puntosComputadora > 21 || puntosJugador > puntosComputadora) {
      desplegarAlerta({ title: "Ganaste!", icon: "success" });
    } else if (puntosJugador === puntosComputadora) {
      desplegarAlerta({ title: "Empate!", icon: "warning" });
    } else {
      desplegarAlerta({ title: "Perdiste, PC gana!", icon: "error" });
    }
  } else {
    desplegarAlerta({ title: "Perdiste, PC gana!", icon: "error" });
  }
};
