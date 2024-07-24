/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y 
altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes 
hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué 
generación pertenece la persona creada y cual es el rasgo característico de 
esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que 
la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras. */

class Persona {
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNac;
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#anioNac = nacimiento;
    }
    get nombre() {
        return this.#nombre;
    }
    get edad() {
        return this.#edad;
    }
    generaDNI() {
        let numAleatorio = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }
    set generaDni(numAleatorio) {
        this.#dni = numAleatorio;
    }
    get dni() {
        return this.#dni;
    }
    get sexo() {
        return this.#sexo;
    }
    get peso() {
        return this.#peso;
    }
    get altura() {
        return this.#altura;
    }
    get nacimiento() {
        return this.#anioNac;
    }
    mostrarGeneracion() {
        if (this.#anioNac >= 1930 && this.#anioNac <= 1948) {
            document.write(`<p>${this.#nombre} pertence a la Silent Generation</p>`)
        } else if (this.#anioNac >= 1949 && this.#anioNac <= 1968) {
            document.write(`<p>${this.#nombre} pertence a la Generacion Baby Bloom</p>`)
        } else if (this.#anioNac >= 1969 && this.#anioNac <= 1980) {
            document.write(`<p>${this.#nombre} pertence a la Generacion X</p>`)
        } else if (this.#anioNac >= 1981 && this.#anioNac <= 1993) {
            document.write(`<p>${this.#nombre} pertence a la Generacion Y</p>`)
        } else if (this.#anioNac >= 1994 && this.#anioNac <= 2010) {
            document.write(`<p>${this.#nombre} pertence a la Generacion Z</p>`)
        }
    }
    esMayordeEdad() {
        if (this.#edad >= 18) {
            document.write(`<p>${this.#nombre} es mayor de edad</p>`)
        } else {
            document.write(`<p>${this.#nombre} no es mayor de edad</p>`)
        }
    }
    mostrarDatos() {
        document.write(`
            <ul>Informe
            <li>Nombre: ${this.#nombre}</li>
            <li>Edad: ${this.#edad}</li>
            <li>DNI: ${this.#dni}</li>
            <li>Sexo: ${this.#sexo}</li>
            <li>Peso: ${this.#peso}</li>
            <li>Altura: ${this.#altura}</li>
            <li>Año de nacimiento: ${this.#anioNac}</li>
            </ul>`)
    }
}

const persona1 = new Persona(
    "Nicolas Montez",
    24,
    Persona.dni,
    "Masculino",
    "75kg",
    "1.80m",
    1950,
)
document.write(persona1.mostrarDatos());
document.write(persona1.esMayordeEdad());
document.write(persona1.mostrarGeneracion());