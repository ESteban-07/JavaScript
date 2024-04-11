// centralizar la lógica para reutilizarla varias veces
function saludar(nombre) {
  // arguments es una palabra unica para las funciones estandar
  // console.log(arguments);
  // console.log(`Hola ${nombre}!`);

  // Sin un return explícito retornara undefined
  return 1;

  // Esto nunca se va a ejecutar
  console.log('Soy un código despues del return');
}

// Función anónima
const saludar2 = function (name) {
  console.log(`Hola ${name}`);
};

const saludarFlecha = (nombre) => {
  console.log(`Hola ${nombre}`);
};

// Buena práctica que las funciones sean inizialidads al principio
// y posteriormente llamarlas
const retornoDeSaludar = saludar('Ela', 40, true, 'El Salvador'); // 1

// saludar2('Kitty');

// saludarFlecha('Rammstain');

function sumar(a, b) {
  return a + b;
}

const sumar2 = (a, b) => a + b;

console.log(sumar(1, 2));

console.log(sumar2(7, 7));

function getAleatorio() {
  return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());
