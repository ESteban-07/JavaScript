class Rectangulo {
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;
  }

  #calcularArea() {
    console.log(this.#area * 2);
  }

  // Método público para calcular el área
  calcularYMostrarArea() {
    this.#calcularArea();
  }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 200; // error al intentar modificar una propiedad privada

// rectangulo.#calcularArea(); // Syntax error

console.log(rectangulo);
