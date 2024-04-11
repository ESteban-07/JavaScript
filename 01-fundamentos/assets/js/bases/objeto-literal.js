const personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.04,
    lng: -118.7,
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880 90265',
    ubicacion: 'Malibu, California',
  },
  'ultima-pelicula': 'Infinity War',
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje['edad']);

console.log('Coords', personaje.coords);
console.log('Coords', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Último traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última película', personaje['ultima-pelicula']);

// Más detalles
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje = true;
console.log(personaje);

// obj.freeze() no cambia propiedades dentro del {} de un objeto
Object.freeze(personaje);

personaje.dinero = 1000000;
personaje.casado = false;

// Bloquear la modificacion de propiedades de un {} dentro de un objeto
// Object.freeze(personaje.direccion);

personaje.direccion.ubicacion = 'Costa Rica';

console.log(personaje);

// getOwnPropertyNames() nos permite listar las propiedades de un Obj
const propiedades = Object.getOwnPropertyNames(personaje);

const valores = Object.values(personaje);

console.log({ propiedades, valores });
