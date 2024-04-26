class Persona {
  /**
   * Propiedades y métodos estáticos
   *
   * Al trabajar con propiedades y métodos estáticos, no estamos operando sobre una instancia de clase,
   * sino que interactuamos directamente con la estructura y las características estáticas de la clase.
   */

  static _conteo = 0;

  /**
   * Getter estático
   *
   * Este getter me permite acceder a un método que se comporta como una propiedad de la clase.
   * Puedo usarlo directamente desde la clase Persona sin necesidad de crear una instancia.
   */

  static get conteo() {
    return Persona._conteo + ' instancias';
  }

  static mensaje() {
    console.log(this.nombre); // undefined
    console.log('Hola a todos, soy un método stático');
  }

  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  // El constructor es un método que siempre se va a ejecutar
  // en el momento que se crea una nueva instancia de Persona
  constructor(
    nombre = 'Sin nombre',
    codigo = 'Sin codigo',
    frase = 'Sin frase'
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    // Hacemos referencia a la clase como tal, no a la instancia
    Persona._conteo++;
  }

  // Sets y Gets
  // Usualmente el  'set' recibe un único argumento
  // que es el que utilizaremos para establecerlo
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  // El 'get' es para recuperar un valor
  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  // Métodos
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: "${this.frase}"`);
  }

  miConteo() {
    console.log(this._conteo);
  }
}

class Heroe extends Persona {
  clan = 'Sin clan';

  constructor(nombre, codigo, frase) {
    // Va a hacer referencia a la clase que extiende directamenete
    super(nombre, codigo, frase);

    this.clan = 'Los Avengers';
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quienSoy();
  }
}

const spiderman = new Heroe('Tony Stark', 'Ironmam', 'Yo soy Ironman');

console.log(spiderman);
spiderman.quienSoy();
