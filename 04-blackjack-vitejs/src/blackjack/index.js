import _ from "underscore";
// import { crearDeck as crearNuevoDeck } from "./usecases/create-deck.js";
// import crearDeck, { miNombre } from "./usecases/create-deck.js";
import { crearDeck } from "./usecases/create-deck.js";

/**
 * Patrón Módulo
 * - - - - - - -
 *
 * Las funciones anónimas autoinvocadas no tienen una referencia por nombre,
 * lo que crea un nuevo ámbito donde no se puede acceder al objeto directamente.
 */

  let deck = [];
  const types = ['C', 'D', 'H', 'S'],
    specials = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];
  let puntosJugador, puntosComputadora;

  // Referencias del HTML
  const btnNuevo = document.querySelector('#btnNuevo'),
    btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener');

  const puntosHTML = document.querySelectorAll('small');
  const divCartasJugadores = document.querySelectorAll('.divCartas');

  const inicializarJuego = (numjugadores = 2) => {
    deck = crearDeck(types, specials);

    puntosJugadores = [];
    puntosJugador = 0;
    puntosComputadora = 0;

    for (let i = 0; i < numjugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ''));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  
  // Esta función me permite tomar una carta
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw 'No hay cartas en el deck';
    }

    return deck.pop();
  };

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
  };

  // Eventos
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    const turno = acumularPuntos(carta, 0);

    [puntosJugador] = puntosJugadores;

    insertarCarta(carta, turno);

    if (puntosJugador >= 21) {
      turnoComputadora(puntosJugador);
    }
  });

  // Turno: 0 = primer jugador y el último será la computadora
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];

    return turno;
  };

  const insertarCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    // Turno: 0 = primer jugador y el último será la computadora
    divCartasJugadores[turno].append(imgCarta);
  };

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
  });

  // turno de la computadora
  const turnoComputadora = (puntosMinimos) => {
    let carta, turno;

    do {
      carta = pedirCarta();

      turno = acumularPuntos(carta, puntosJugadores.length - 1);

      [, puntosComputadora] = puntosJugadores;

      insertarCarta(carta, turno);

      if (puntosMinimos >= 21) break;
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    deshabilitarBotones();
  };

  // Detener Juego
  btnDetener.addEventListener('click', () => {
    if (!puntosJugador) return;

    turnoComputadora(puntosJugador);
  });

  const deshabilitarBotones = () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    imprimirGanador();
  };

  const imprimirGanador = () => {
    if (puntosJugador <= 21) {
      if (puntosComputadora > 21 || puntosJugador > puntosComputadora) {
        desplegarAlerta({ title: 'Ganaste!', icon: 'success' });
      } else if (puntosJugador === puntosComputadora) {
        desplegarAlerta({ title: 'Empate!', icon: 'warning' });
      } else {
        desplegarAlerta({ title: 'Perdiste, PC gana!', icon: 'error' });
      }
    } else {
      desplegarAlerta({ title: 'Perdiste, PC gana!', icon: 'error' });
    }
  };

  const desplegarAlerta = ({ title, icon }) => {
    return setTimeout(() => {
      Swal.fire({
        title,
        icon,
        text: `Tú: ${puntosJugador} - PC: ${puntosComputadora}`,
      });
    }, 1000);
  };


