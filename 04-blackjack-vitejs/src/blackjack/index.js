import _ from "underscore";
// import { crearDeck as crearNuevoDeck } from "./usecases/create-deck.js";
// import crearDeck, { miNombre } from "./usecases/create-deck.js";
import {
  crearDeck,
  pedirCarta,
  turnoComputadora,
  insertarCarta,
  acumularPuntos,
} from "./usecases";

/**
 * Patrón Módulo
 * - - - - - - -
 *
 * Las funciones anónimas autoinvocadas no tienen una referencia por nombre,
 * lo que crea un nuevo ámbito donde no se puede acceder al objeto directamente.
 */

let deck = [];
const types = ["C", "D", "H", "S"],
  specials = ["A", "J", "Q", "K"];

let puntosJugadores = [];
let puntosJugador, puntosComputadora;

// Referencias del HTML
const btnNuevo = document.querySelector("#btnNuevo"),
  btnPedir = document.querySelector("#btnPedir"),
  btnDetener = document.querySelector("#btnDetener");

const puntosHTML = document.querySelectorAll("small");
const divCartasJugadores = document.querySelectorAll(".divCartas");

const inicializarJuego = (numjugadores = 2) => {
  deck = crearDeck(types, specials);

  puntosJugadores = [];
  puntosJugador = 0;
  puntosComputadora = 0;

  for (let i = 0; i < numjugadores; i++) {
    puntosJugadores.push(0);
  }

  puntosHTML.forEach((elem) => (elem.innerText = 0));
  divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));

  btnPedir.disabled = false;
  btnDetener.disabled = false;
};

// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta(deck);
  const turno = acumularPuntos(carta, 0);

  [puntosJugador] = puntosJugadores;

  insertarCarta(carta, turno);

  if (puntosJugador >= 21) {
    puntosComputadora = turnoComputadora(puntosJugador, deck);
  }
});

btnNuevo.addEventListener("click", () => {
  inicializarJuego();
});

// Detener Juego
btnDetener.addEventListener("click", () => {
  if (!puntosJugador) return;

  puntosComputadora = turnoComputadora(puntosJugador, deck);
});

export {
  puntosJugadores,
  puntosJugador,
  puntosComputadora,
  puntosHTML,
  divCartasJugadores,
};
