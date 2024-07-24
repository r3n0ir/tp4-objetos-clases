/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes 
propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la 
cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y 
volver a mostrar la descripción del estado de la cuenta. */

let monto;
const cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar: function (monto) {
        this.saldo = this.saldo + monto;
    },
    extraer: function (monto) {
        if (monto > this.saldo) {
            alert('Saldo insuficiente para realizar la extraccion')
        }else{
            this.saldo = this.saldo - monto;
        }
    },
    informar: function () {
        alert(`INFORME DE LA CUENTA\n  Titular: ${this.titular}\n  Saldo: ${this.saldo}`)
    },
}
do {
    let opcion = parseInt(prompt('Presione 1 para ingresar dinero\nPresione 2 para extraer dinero\nPresione 3 para un informe\nPresione CANCELAR para salir'))
    switch (opcion) {
        case 1:
            monto = parseInt(prompt('Ingrese el monto'))
            cuenta.ingresar(monto);
            break;
        case 2:
            monto = parseInt(prompt('Ingrese el monto'))
            cuenta.extraer(monto);
            break;
        case 3:
            cuenta.informar();
            break;
    }
} while (confirm('¿Desea seguir operando en la cuenta?'));  