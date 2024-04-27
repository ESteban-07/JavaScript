// Un Singleton es una instancia única de mi clase
class Singleton {
  static instancia; // Almacena la instancia única de la clase
  nombre = ''; // propiedad 'nombre' de la instancia

  constructor(nombre = '') {
    // Es más fácil para nosotros y JS trabajar con un valor booleano que evaluarlo contra null o undefined
    const a = undefined;
    console.log(a); // Muestra 'undefined'
    console.log(!a); // El operador de negación lógica convierte 'undefined' en 'true'
    console.log(!!a); // La doble negación convierte 'true' en 'false'

    // Si ya existe una instancia de la clase, devuelve la misma instancia
    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    // Establece la instancia actual como la instancia única del Singleton
    Singleton.instancia = this;
    this.nombre = nombre;

    // return this;
  }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');

console.log(`Nombre en la instancia1 es ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es ${instancia3.nombre}`);
