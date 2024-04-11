const elMayor = (a, b) => (a > b ? a : b);

const tieneMembresia = (miembro) => (miembro ? '2 Dólares' : '10 Dólares');

console.log(elMayor(20, 35));

console.log(tieneMembresia(true));
console.log(tieneMembresia(false));

const amigo = true;
const amigosArr = [
  'Peter',
  'Tony',
  'Dr. Strange',
  amigo ? 'Thor' : 'Loki',
  (() => 'Nick Fury')(), // función anónima autoinvocada
  elMayor(10, 15),
];

console.log(amigosArr);

const nota = 82.5; // A+, A B+
const grado =
  nota >= 95
    ? 'A+'
    : nota >= 90
    ? 'A'
    : nota >= 85
    ? 'B+'
    : nota >= 80
    ? 'B'
    : nota >= 75
    ? 'C+'
    : nota >= 70
    ? 'C'
    : 'F';

console.time('NOTA');
console.log({ nota, grado });
console.timeEnd('NOTA');

/*
if (nota >= 95) {
  ('A+');
} else {
  if (nota >= 90) {
    ('A');
  } else {
    if (nota >= 85) {
      ('B+');
    } else {
      if (nota >= 80) {
        ('B');
      } else {
        if (nota >= 75) {
          ('C+');
        } else {
          if (nota >= 70) {
            ('C');
          } else {
            ('F');
          }
        }
      }
    }
  }
}
 */
