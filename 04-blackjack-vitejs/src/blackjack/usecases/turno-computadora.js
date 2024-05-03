import { pedirCarta, acumularPuntos, insertarCarta, deshabilitarBotones} from "./";
import { puntosJugadores } from "../";

/**
 * turno de la computadora
 * @param { Number } puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param { Array<String> } deck es un array de string
 */
export const turnoComputadora = (puntosMinimos, deck = []) => {
  if (!puntosMinimos) throw new Error("Puntos mínimos son necesario");

  let carta,
    turno,
    puntosComputadora = 0;

  do {
    carta = pedirCarta(deck);

    turno = acumularPuntos(carta, puntosJugadores.length - 1);

    puntosComputadora = puntosJugadores[turno];

    insertarCarta(carta, turno);

    if (puntosMinimos >= 21) break;
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  deshabilitarBotones();

  return puntosComputadora;
};
