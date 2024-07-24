/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben 
presentar las propiedades código, nombre y precio, además del método imprime 
datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los 
valores de los tres objetos instanciados. */

class Producto {
    #codigo;
    #nombre;
    #precio;
    constructor(codigo, nombre, precio) {
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
    }
    get codigo() {
        return this.#codigo;
    }
    get nombre() {
        return this.#nombre;
    }
    get precio() {
        return this.#precio;
    }
    imprimeDatos() {
        document.write(`
            <ul>Producto
            <li>Codigo: ${this.#codigo}</li>
            <li>Nombre: ${this.#nombre}</li>
            <li>Precio: ${this.#precio}</li>
            </ul>`)
    }
}
const productos = [];
productos.push(new Producto("001", 2000, "Jean"))
productos.push(new Producto("002", 1000, "Remera"))
productos.push(new Producto("003", 3000, "Zapatillas"))
for (const producto of productos) {
    producto.imprimeDatos();
}