/**
 * Días de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy...

const dia = 1; // 0: domingo... 1: lunes ...
const horaActual = 10;
const dias = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];
const diaActual = dias[dia];

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {}
// if ([0, 6].includes(dia)) {
//   console.log(`Fin de semana - ${diaActual}`);
//   horaApertura = 9;
// } else {
//   console.log(`Día de semana - ${diaActual}`);
//   horaApertura = 11;
// }

horaApertura = [0, 6].includes(dia) ? 9 : 11;

// if (horaActual >= horaApertura) {
//   mensaje = `son las ${horaActual}, está abierto`;
// } else {
//   mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje =
  horaActual >= horaApertura
    ? 'Está Abierto :)'
    : `Está Cerrado, abrimos a las ${horaApertura}`;

console.log({ diaActual, horaApertura, horaActual, mensaje });

/**
 * // Utilizando operador ternario '?'
 * dia === 0 || dia === 6 ? (horaApertura = 9) : (horaApertura = 11);
 * mensaje = horaActual >= horaApertura ? 'Está Abierto' : 'Está cerrado';
 * console.log({ dia, diaActual, horaApertura, horaActual, mensaje });
 */
