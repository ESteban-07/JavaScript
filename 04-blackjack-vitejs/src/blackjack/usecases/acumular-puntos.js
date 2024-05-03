import { valorCarta } from "./";
import { puntosJugadores, puntosHTML } from "..";

// Turno: 0 = primer jugador y el último será la computadora
export const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];

    return turno;
};