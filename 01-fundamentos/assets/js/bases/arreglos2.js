let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo:', juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

// Insertar un elemento al final
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

// Insertar un nuevo elemento al inicio
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

// Eliminar el primer elemento de un arr
nuevaLongitud = juegos.shift();
console.log('nuevaLongitud', juegos);

// borrar ultimo elemento
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado });

// borrar elemento especifico
let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf('metroid');
console.log({ metroidIndex });
