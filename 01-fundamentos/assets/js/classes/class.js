class Persona {
  // Propiedades y Métodos Estáticos
  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  // El constructor es un método que se va a ejecutar
  // en el momento que se crea una nueva instancia de Persona
  constructor(
    nombre = 'Sin nombre',
    codigo = 'Sin codigo',
    frase = 'Sin frase'
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
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
}

const spiderman = new Persona(
  'Peter Parker',
  'Spiderman',
  'Soy tu amigable vecino Spiderman'
);

const ironman = new Persona('Tony Stark', 'Ironmam', 'Yo soy Ironman');
// console.log(ironman);

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde'; // Esto es algo que puede suceder y se puede evitar con las propiedades privadas

console.log(spiderman);
console.log(spiderman.getComidaFavorita);
