const { red, blue, green } = require('chalk'); // Usar chalk
const { log } = console; // Acortar console.log a log()
const prompt = require('prompt-sync')({ sigint: true });

// While
let counter1 = 5, counter2 = 30;
while(counter1 < 10 && counter2 > 25) {
    log('Contador 1:', counter1, '--- Contador 2:', counter2);
    counter1++;
    counter2--;
}

counter1 = 0, counter2 = 'Hola';
// Do-While
do {
    log('tas en el do-while');
    counter1++;
    if (counter1 == 2) counter2 = 'Adiós';
} while(counter2 == 'Hola');

counter1 = 25;
do {
    log('Valor:', counter1);
    counter1 -= 5;
} while(counter1);

/* Ejercicio do-while 
Crear un programa que lea tantos números quiera hasta recibir a un cero
Cuando lo reciba, muestre el resultado de la suma de todos los números */

let resultado = 0;
do {
    var num = parseInt(prompt(blue('Dame un número: '))); // let no funciona por scope
    resultado += num;
} while(num != 0);
log(green('El resultado es:'), resultado);