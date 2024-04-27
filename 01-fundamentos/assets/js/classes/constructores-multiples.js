class Persona {
  // Este método estático crea una nueva instancia de Persona
  // utilizando los datos de un objeto como argumentos para el constructor
  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  // Método para imprimir la información de la persona
  getInfo() {
    console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

const nombre1 = 'Melissa',
  apellido1 = 'Flores',
  pais1 = 'Honduras';

const fher = {
  nombre: 'Fernando',
  apellido: 'Herrera',
  pais: 'Costa Rica',
};

const persona1 = new Persona(nombre1, apellido1, pais1); // Crear instancia de Persona con argumentos individuales
const persona2 = Persona.porObjeto(fher); // Crear instancia de Persona con un objeto como argumento

persona1.getInfo();
persona2.getInfo();
