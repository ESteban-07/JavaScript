/**
 *Esta función me permite tomar una carta
 * @param { Array<String> } deck es un array de string
 * @returns { String } retorna la ultima carta del deck barajeado
 */
export const pedirCarta = (deck) => {
if (deck.length === 0) {
    throw 'No hay cartas en el deck';
}

return deck.pop();
};