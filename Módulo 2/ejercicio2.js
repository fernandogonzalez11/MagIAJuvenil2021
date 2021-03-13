const ver = require('latest-version');
const prompt = require('prompt-sync')();
const { green, red, blue, magenta } = require('chalk');

const { log } = console;

/* Ejercicio 2
Se adivina las letras de una palabra de 4 letras, se tienen cuatro intentos para adivinarla
Al inicio, la palabra va a estar oculta, cuando se acierte, se mostrará la letra
Si se adivina la palabra, se gana; si se acaban los intentos se pierde
*/
/*let palabra = [];
let mostrado = ['-', '-', '-', '-'];
let aciertos = 0, fallas = 4;

for (let i = 0; i < 4; i++) {
    palabra[i] = prompt(`Dame la letra ${i+1}: `);
}
log(palabra);*/

// TODO: Hacer un refactor de este código (no sé, utilizar un for o algo para no repetir las mismas
// instrucciones en cada case y hacerlo más dinámico)

const palabra = ['h', 'o', 'l', 'a'];
let adivinado = ['_', '_', '_', '_'];
let aciertos = 0, intentos = 4;

for (let i = 0; i < (palabra.length * 2); i++) {
    let cur = prompt(magenta('Ingresa la letra: '));
    switch (cur) {
        case palabra[0]: {
            adivinado[0] = palabra[0];
            log(blue(adivinado.join(' ')));
            aciertos++;
            break;
        }
        case palabra[1]: {
            adivinado[1] = palabra[1];
            log(blue(adivinado.join(' ')));
            aciertos++;
            break;
        }
        case palabra[2]: {
            adivinado[2] = palabra[2];
            log(blue(adivinado.join(' ')));
            aciertos++;
            break;
        }
        case palabra[3]: {
            adivinado[3] = palabra[3];
            log(blue(adivinado.join(' ')));
            aciertos++;
            break;
        }
        default: {
            intentos--;
            log(red('Te equivocaste lol!!!!'));
            log(red(`Te quedan ${intentos} intentos`));
            break;
        }
    }
    if (aciertos == 4) { log(green('Acertaste pog!')); break;}
    if (intentos == 0) { log(red('Fallaste bruh')); break;}
}
