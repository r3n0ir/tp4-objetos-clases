/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para modificar 
y mostrar sus propiedades, calcular el perímetro y el área.

class Pokemon {
  //declarar propiedades privas
  #numPokeDex;
  //creo las propiedades de mis objetos
  constructor(nombreParam, tipo, evoluciones, numPokeDex) {
    //nombrePropiedad = nombreParametro
    this.nombre = nombreParam;
    this._tipo = tipo;
    this.evoluciones = evoluciones;
    this.#numPokeDex = numPokeDex;
    this.estado = true;
  }
  //propiedades computadas get y set
  get numPokeDex() {
    return this.#numPokeDex;
  }

  set numPokeDex(nuevoNumPokeDex) {
    if (nuevoNumPokeDex > 0 && nuevoNumPokeDex <= 300) {
      this.#numPokeDex = nuevoNumPokeDex;
    } else {
      alert("numero invalido");
    }
  }
    const pikachu = new Pokemon(
  "Pikachu",
  "Electrico",
  ["Pichu", "pikachu", "Raichu"],
  25
); */

class Rectangulos {
    #alto;
    #ancho;
    constructor(ancho, alto) {
        this.#alto = alto;
        this.#ancho = ancho
    }
    set alto(nueva_altura) {
        this.#alto = nueva_altura;
    }
    set ancho(nueva_anchura) {
        this.#ancho = nueva_anchura;
    }
    get area() {
        return this.#alto * this.#ancho;
    }
    get perimetro() {
        return 2 * (this.#alto + this.#ancho);
    }
}
const rectangulo1 = new Rectangulos(
    5,
    5,
)
console.log(rectangulo1);
alert(`Area del rectangulo: ${rectangulo1.area}`);
alert(`Perimetro del rectangulo: ${rectangulo1.perimetro}`);