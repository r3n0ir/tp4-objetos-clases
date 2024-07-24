/* 1- Crea un objeto llamado auto que tenga algunas características como el 
color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios 
para permitir encender y apagar el auto.
Output:

objeto.encender();     auto encendido
objeto.apadar()        El auto se apagó  */

const auto = {
    color: 'Rojo',
    marca: 'Toyota',
    modelo: 'Corolla',
    estado: 'Apagado',
    encender: function () {
        document.write('<p>El auto se encuentra encendido</p>')
    },
    apagar: function () {
        document.write('<p>El auto se encuentra apagado</p>')
    },
}
document.write('Datos del auto:')
document.write(`<ul>`)
document.write(`<li>Color: ${auto.color}</li>`);
document.write(`<li>Marca: ${auto.marca}</li>`);
document.write(`<li>Modelo: ${auto.modelo}</li>`);
document.write(`<li>Estado: ${auto.estado}</li>`);
document.write(`</ul>`)

if (confirm('¿Desea encender el auto?')) {
    auto.encender();
    auto.estado = 'Encendido';
    document.write(`<li>Estado: ${auto.estado}</li>`);
}else{
    auto.apagar();
    document.write(`<li>Estado: ${auto.estado}</li>`);
}
