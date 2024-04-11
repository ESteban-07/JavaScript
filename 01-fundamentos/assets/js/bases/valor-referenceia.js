// Valor, referencia y romper la referencia

// Con primitivos se pasa una copia del valor
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// En JS todos los objetos se pasan por referencia
let juan = { nombre: 'juan' };

// operador spread para separar los valores de un objeto
// Rompemos la referencia en JS al crear una copia de las propiedades
let ana = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
  persona.nombre = 'Tony';
  return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

// parametro rest '...' como argumento de una funcion
// quiere decir "une todos los argumentos en una sola variable y transformalo como un arreglo"
// const restArgument = (...args) => {};

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

// separamos cada uno de los elementos que contiene el arreglo
// y retornarlo de una manera independiente rompiendo con la referencia

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });

// otro método para romper la referencia en un arreglo
// el metodo slice() sin ningun argumento esto regresa un nuevo arreglo rompiendo dicha relación
// const otrasNuevasFrutas = frutas.slice();
