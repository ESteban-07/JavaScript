const regresaTrue = () => {
  console.log('Regresa true');
  return true;
};

const regresaFalse = () => {
  console.log('Regresa False');
  return false;
};

console.warn('Not o la negacion');
console.log(true);
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

/******** ************/
console.log('============');
// si la primer instruccion regresa false
// va a ignorar cualquier cosa que venga después
console.log(regresaFalse() && regresaTrue());

// sería diferente si primero retorna un verdadero
// luego evaluaría la segunda función
console.log(regresaTrue() && regresaFalse());

console.log('==== && ====');
regresaFalse() && regresaTrue();

console.log('4 condiciones', true && true && true && false); // false

console.warn('OR');
// para que el 'or' regrese true por lo menos una condición
// debe ser cierta
console.log(true || false);
console.log(false || false);

// JS ya sabe que va a retornar un verdadero sin importar
// lo que venga después
console.log(regresaTrue() || regresaFalse());
console.log('4 condiciones', true || true || true || false); // true

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo' && 150; // 150
const a2 = 'Hola' && 'Mundo' && soyFalso && true; // false
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
const a5 =
  soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo';

console.log({ a1, a2, a3, a4, a5 });

// No es recomendable llegar a esta complejidad de código
if (regresaTrue() && regresaFalse() && (true || true || true || false)) {
  console.log('Hacer algo');
} else {
  console.log('Hacer otra cosa');
}
