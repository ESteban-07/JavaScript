import _ from "underscore";

// Esta función crea una nueva baraja
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    deck = [];

    // 2C, 2D, 2H, 2S
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tiposDeCarta) {
        deck.push(`${i}${tipo}`);
      }
    }

    for (let especial of tiposEspeciales) {
      for (let tipo of tiposDeCarta) {
        deck.push(`${especial}${tipo}`);
      }
    }

    return _.shuffle(deck);
  };
