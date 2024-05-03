import { divCartasJugadores } from "../";

export const insertarCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    // Turno: 0 = primer jugador y el último será la computadora
    divCartasJugadores[turno].append(imgCarta);
};