let a = 10;

if (a >= 10) {
  // Excepeciones undefined, null, asignación
  console.log('A es mayor a 10');
} else {
  console.log('A es menor a 10');
}

// console.log('Fin de programa');

// new permite crear una nueva instancia de un objeto Date()
const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes...

console.log({ dia });

if (dia === 0) {
  console.log('Domingo');
} else if (dia === 1) {
  console.log('Lunes');
} else if (dia === 2) {
  console.log('Martes');
} else if (dia === 3) {
  console.log('Miércoles');
} else if (dia === 4) {
  console.log('Jueves');
} else if (dia === 5) {
  console.log('Viernes');
} else if (dia === 6) {
  console.log('Sábado');
} else if (dia === 7) {
  console.log('Domingo');
}

// Arreglos
const daysOftheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thurdsday',
  'Friday',
  'Saturday',
];

const getDayOfTheWeek = () => {
  daysOftheWeek.forEach((element) => {
    // if (element === daysOftheWeek[dia]) {
    //   console.log('Hoy es', element);
    // } else {
    //   console.log(`Hoy no es ${element}`);
    // }

    element === daysOftheWeek[dia]
      ? console.log(`%c Today is ${element}`, 'color:white; background: green')
      : console.log(`Today is not ${element}`);
  });
};

// Objetos
const diasDeLaSemana = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
};

for (x in diasDeLaSemana) {
  x == dia
    ? console.log(
        `%cHoy es ${diasDeLaSemana[x]}`,
        'color:white; background: purple; font-weight: bold'
      )
    : console.log(
        `%cHoy no es ${diasDeLaSemana[x]}`,
        'color:white; background: black; font-weight: bold'
      );
}

// Fernando

const diasLetras = {
  0: () => 'Domingo - 0',
  1: () => 'Lunes - 1',
  2: () => 'Martes - 2',
  3: () => 'Miércoles - 3',
  4: () => 'Jueves - 4',
  5: () => 'Viernes - 5',
  6: () => 'Sábado - 6',
};

// día de la semana
// dia = 10;
// console.log(diasLetras[dia] || 'Día no existe');

console.log(diasLetras[dia]());
