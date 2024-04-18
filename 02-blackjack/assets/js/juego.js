// Patrón Módulo

// Las funciones anónimas autoinvocadas no tienen una referencia por nombre,
// lo que crea un nuevo ámbito donde no se puede acceder al objeto directamente.
(() => {
  'use strict';

  let deck = [];
  const types = ['C', 'D', 'H', 'S'],
    specials = ['A', 'J', 'Q', 'K'];

  let puntosJugador = 0,
    puntosComputadora = 0;

  // Referencias del HTML
  const btnNuevo = document.querySelector('#btnNuevo'),
    btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener');

  const divJugadorCartas = document.querySelector('#jugador-cartas'),
    divComputadoraCartas = document.querySelector('#computadora-cartas'),
    puntosHTML = document.querySelectorAll('small');

  // Esta función inicializa el juego
  window.addEventListener('load', () => inicializarJuego());

  const inicializarJuego = () => {
    deck = crearDeck();
  };

  // Esta función crea una nueva baraja
  const crearDeck = () => {
    deck = [];

    // 2C, 2D, 2H, 2S
    for (let i = 2; i <= 10; i++) {
      for (let type of types) {
        deck.push(`${i}${type}`);
      }
    }

    for (let special of specials) {
      for (let type of types) {
        deck.push(`${special}${type}`);
      }
    }

    return _.shuffle(deck);
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
    insertarCarta('jugador');

    if (puntosJugador >= 21) {
      turnoComputadora(puntosJugador);
    }
  });

  const insertarCarta = (turno) => {
    const carta = pedirCarta();

    if (turno === 'jugador') {
      puntosJugador += valorCarta(carta);
      puntosHTML[0].innerText = puntosJugador;
    } else {
      puntosComputadora += valorCarta(carta);
      puntosHTML[1].innerHTML = puntosComputadora;
    }

    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    if (turno === 'jugador') {
      divJugadorCartas.append(imgCarta);
    } else {
      divComputadoraCartas.append(imgCarta);
    }
  };

  const reiniciarJuego = () => {
    for (let puntos of puntosHTML) {
      puntos.innerHTML = '0';
    }

    divJugadorCartas.innerHTML = '';
    divComputadoraCartas.innerHTML = '';

    puntosJugador = 0;
    puntosComputadora = 0;

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
    reiniciarJuego();
  });

  // turno de la computadora
  const turnoComputadora = (puntosMinimos) => {
    do {
      insertarCarta('pc');

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
    return Swal.fire({
      title,
      icon,
      text: `Tú: ${puntosJugador} - PC: ${puntosComputadora}`,
    });
  };
})();
