function crearPersona(nombre, apellido) {
  return {
    nombre,
    apellido,
  };
}

const persona = crearPersona('Esteban', 'Elías');

console.log(persona);

// Para retornar un objeto utilizando las funciones flecha
// hay que utilizar parentesis ()
const crearPersona2 = (name, lastname) => ({
  name,
  lastname,
});

const persona2 = crearPersona2('Ela', 'P');
console.log(persona2);

function imprimerArgumentos() {
  console.log(arguments);
}
console.log(imprimerArgumentos(10, true, false, 'Fernando', 'Hola'));

// Después del parámetro rest '...' no puede ir otro argumento
const imprimeArgumentos2 = (edad, ...args) => {
  // console.log({ edad, args });
  return args;
};

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  'Fernando',
  'Hola'
);
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona('Esteban', 'Elías');

console.log({ nuevoApellido });

const tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//   console.log('nombre: ' + personaje.nombre);
//   console.log('codeName: ' + personaje.codeName);
//   console.log('vivo: ' + personaje.vivo);
//   console.log('edad: ' + personaje.edad);
//   console.log('trajes: ' + personaje.trajes);
// };

// Desestructuración de argumentos
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  // edad = edad || 0; // validación de valor

  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
