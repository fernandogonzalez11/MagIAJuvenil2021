const { blue, green } = require('chalk');
const { log } = console;
const prompt = require('prompt-sync')();

log(blue('ARREGLOS'));
let arregloNombres = ['Luis', 'Diana', 'Omar', 'Paola'];
log(arregloNombres[2]);
arregloNombres[2] = 'Rosa';
//log(arregloNombres[2]);
delete arregloNombres[2];
log(arregloNombres);
log('Hay', arregloNombres.length, 'elementos en el arreglo');
arregloNombres.push('Cristina');
log(arregloNombres);
arregloNombres.pop();
log(arregloNombres);
// Splice params:   index     count      element //
arregloNombres.splice(0,        0,     'Cristina');
log(arregloNombres);

/* Ejercicio
Realizar un programa que lea por teclado 5 notas/calificaciones y muestre el promedio de estas */
let notas = [];
for (let i = 1; i <= 5; i++) {
    notas.push(parseFloat(prompt(blue(`Dame la nota #${i}: `))));
}
let promedio = (notas.reduce((acc, cur) => acc + cur) / notas.length);
log(green(`Promedio: ${promedio}`));

let arr1 = ['Hola', 'Buenas', 'Tardes'];
let arr2 = ['Hola', 'Buenas', 'Noches'];
log(arr1.concat(arr2));