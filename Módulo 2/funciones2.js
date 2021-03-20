/* Ejercicio 1
Escribir un programa que obtenga el precio de un producto y calcule
el precio total, ya que también se va a cobrar el costo de envío únicamente
si el precio es mayor o igual a $399 */

let producto = {
    nombre: 'Celular',
    precio: 500
};
function calcularPrecioTotal(precio, nombre) {
    let resultado = 0;

    console.log('Factura');
    console.log(`Costo de ${producto.nombre}: ${producto.precio}`);
    if (precio <= 399) {
        console.log('Costo del envío: $100');
        resultado = precio + 100;
    } else {
        resultado = precio;
    }
    console.log('El total a pagar es:', resultado);
}

calcularPrecioTotal(producto.precio, producto.nombre);

(function ambitoVar() {
    const i = 1;
    if (i == 1) {
        var variableVar = 'Ámbito de variable';
    }
    console.log(variableVar);
})();
// console.log(variableVar); // --> error
let nombre = 'Luis';
nombre = 'Pablo';
console.log(nombre);

(function ambitoLet() {
    const i = 1;
    if (i == 1) {
        let variableLet = 'Ámbito de variable but it\'s let';
        console.log(variableLet);
    }
    // console.log(variableLet);
})();

/* AKA
------------------------------------
`var` funciona en scope local-global 
    (entre brackets de bloques mayores pero no afuera de ellos)
    (también globalmente a las afueras del código)

function () {
    if (true) {
        var i = 0;
        console.log(i) // esto funciona
    }
    console.log(i) // esto funciona
}
console.log(i) // esto no
------------------------------------
`let` `const` funciona en scope local
    (entre brackets de bloques más cercanos, no funciona afuera en ningún bloque mayor

function () {
    if (true) {
        let i = 0;
        console.log(i) // esto funciona
    }
    console.log(i) // esto no
}
console.log(i) // esto no
------------------------------------- */
multiplicar(14);
function multiplicar(x) {
    console.log('Resultado:', x * 2);   
}
multiplicar(15);