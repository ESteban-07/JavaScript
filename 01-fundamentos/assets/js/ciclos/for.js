const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');

// inicializa la variable; condición del ciclo; incrementador
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn('For in');

for (let i in heroes) {
  console.log(heroes[i]);
}

console.warn('For of');
// extrae el valor dentro del arreglo
for (let heroe of heroes) {
  console.log(heroe);
}

/**
 * En resumen, el 'for in' se utiliza para iterar sobre propiedades enumerables de un objeto
 * mientras que 'for-of' recorre los valores de estrucutras de datos iterbales
 */
