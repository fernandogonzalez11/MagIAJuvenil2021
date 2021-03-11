const chalk = require('chalk'); // Usar chalk para colores en la terminal
const readline = require('readline'); // Usar readline de Node para leer input
const { log, error } = console; // Acortar console.log() a solo log(); igual con error()

/* Ejercicio #1
Esta es mi implementación del Ejercicio #1 del Módulo 2
Todas las instrucciones pueden ser visualizadas en el PDF proveído en Archivos
Básicamente, hacer una simulación de una máquina expendendora (no hay muchas en CR :sadge:)
    • Debe tener productos con sus respectivos códigos, precios y nombres (proveídos)
    • Debe revisar invalidez de códigos o falta de dinero
    • Debe dar vuelto
    • El input: código y dinero a pagar
    • Debe proveer output de sus acciones (no necesariamente verboso)

Aprendí de hacer bots de Discord que las cosas se deberían hacer lo más fáciles para ambos el usuario
(con una interfaz bonita) y el vendor/administrador (con dinamismo para realizar sus acciones sin dificultad),
aun cuando al desarrollador le cueste.

Es por lo que decidí hacer una aplicación de terminal fácil de ejecutar y visualmente atractiva (por lo menos
para el estándar de una terminal), y un código fácilmente manipulable (en el que el admin no tiene que alterar
las funciones internas para hacer cambios menores)

• Los productos se trabajan en un Object[], en el cual se incluyen los varios datos necesarios. Si el admin quiere
cambiar o añadir, lo puede hacer con solo modificar la variable de codes.
• Se usa el módulo de 'chalk' para darle colores a la terminal, y 'readline' para leer input de usuario.
• Hay una función para manejar errores (por que quiero que se vea como que en un error se apaga)
• También otra función para cuando se cierre el escáner de readline (le llamé scanner por java.util.Scanner xd)
• Uno que otro JSDoc para ayudarme con el autocomplete
• Otras cosas misceláneas

Con amor Fernando (๑・ω・๑)
*/

// Estos son los datos de los productos en un Object[]
const codes = [
    { codigo: 'xc23', nombre: 'chocolate', precio: 12.5 },
    { codigo: 'c4f2', nombre: 'paleta', precio: 5.75 },
    { codigo: 'gt74', nombre: 'chicle', precio: 4.25 },
    { codigo: 'l3k8', nombre: 'galleta', precio: 9.10 }
];

// La interfaz de input
const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/** @type {string} */ let inputCod; // El código proveído por input, se va a requerir después
/** @type {{codigo:string,nombre:string,precio:number}} */ let res; // Regresa el Object con los datos del producto

// Pide el primer input y evalúa la respuesta
scanner.question(chalk.blue('Digita el código del producto: '), ans => {
    inputCod = ans; // Guarda el valor a una variable para usar después
    res = codes.find(c => c.codigo == inputCod); // Si la pongo en inicialización pone undefined

    // O el código está malo, o el programador está malo jaj
    if (!res) return handleError('El código es incorrecto, ingresa uno válido');

    // log(res); // Esto es debug

    // Pide el segundo input y evalúa (sí, necesitaba hacerlo con nesting o se dañaba)
    scanner.question(chalk.blue('Digita la cantidad a pagar: '), ans => {
        ans = parseFloat(ans); // De String a Number (Float)
        // Por si el pago no es un número
        if (Number.isNaN(ans) || ans < 0) return handleError('El pago es un dato inválido, por favor incluye un'+
        ' número positivo con o sin decimales!');

        // log(ans); // Otro debug

        // Si no hay suficiente dinero
        if (ans < res.precio) return handleError('No hay suficiente dinero para comprar este producto');
        // Compra el chunche
        log(`Compra de ${res.nombre} exitosa, gracias por su preferencia`);
        // Si hay dinero de sobra (momento pagar con 10 rojos)
        if (ans > res.precio) log(`Tu cambio es de ${ans - res.precio}`);

        setTimeout(() => scanner.close(), 4000); // Cierra el programa si todo estuvo bien (4s)
    });
});

// Esto es solo para cerrar el escáner y poner el error en rojito cuando haya uno
function handleError(err) {
    error(chalk.red(err));
    setTimeout(() => scanner.close(), 3000);
}

// Cuando el escáner se cierra. Limpia la terminal, imprimir un mensaje y esperar 1s para cerrarse
scanner.on('close', () => {
    console.clear();
    console.log(chalk.green('Apagando la máquina...'));
    setTimeout(() => {
        process.exit(0);
    }, 1000);
});