/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Tréboles)
 * 2H = Two of Hearts (Tréboles)
 * 2S = Two of Spade (Tréboles)
 */

let deck = [];
let deckComputadora = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
  puntosComputadora = 0;

// Referencias del HTML
const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const puntosHTML = document.querySelectorAll('small');
const jugadorCartas = document.querySelector('#jugador-cartas');

// Esta función crea una nueva baraja
const crearDeck = () => {
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

  // console.log(deck);
  deck = _.shuffle(deck);
  deckComputadora = deck;
  console.log(deck);
  return deck;
};

crearDeck();

// Esta función me permite tomar una carta

const pedirCarta = () => {
  if (deck.length === 0) {
    throw 'No hay cartas en el deck';
  }

  const carta = deck.pop();
  return carta;
};

/*
// testing
// for (let i = 0; i <= 100; i++) {
//   pedirCarta();
// }

const valorCarta = (carta) => {
  // const valor = parseInt(carta.split('')[0]); // ML
  let puntos = 0;

  // extraemos la parte numérica del array excluyendo el último valor (letra)
  const valor = carta.substring(0, carta.length - 1);
  console.log({ valor });
  if (isNaN(valor)) {
    console.log('No es un número');
    puntos = valor === 'A' ? 11 : 10;
  } else {
    console.log('Es un número');
    puntos = valor * 1;
  }

  console.log(puntos);
};
*/

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};

/*
// let valor = valorCarta(pedirCarta());
// console.log({ valor });

// Conocer valor de la carta
// for (let i = 0; i < 55; i++) {
//   let card = pedirCarta();
//   let value = valorCarta(card);

//   // {card: 'KS', value: 10}
//   console.log({ card, value });
// }
*/

// Eventos
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();

  puntosJugador += valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  // jugadorCartas.innerHTML += `<img class="carta" src="./assets/cartas/${carta}.png" alt="carta" />`;
  const imgCarta = document.createElement('img');
  imgCarta.src = `./assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  jugadorCartas.append(imgCarta);

  // Lógica del jugador
  if (puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
  } else if (puntosJugador === 21) {
    console.log('%cGanaste!!', 'color:white;background:blue;');
  }
});

// Nuevo Juego
btnNuevo.addEventListener('click', () => window.location.reload());

// turno de la computadora
const turnoComputadora = (puntosMinimos) => {
  // do {
  // } while () {
  // }
};

// Detener Juego
btnDetener.addEventListener('click', () => {
  if (!puntosJugador) return;
  btnPedir.disabled = true;
});
