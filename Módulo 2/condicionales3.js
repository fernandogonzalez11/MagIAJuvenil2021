const prompt = require('prompt-sync')();
const { log, error } = console;
const { blue, green, red } = require('chalk');
const { stripIndents } = require('common-tags');

/* Ejercicio
Cada vez que una persona ingrese por una hora del día se mostrará un mensaje que diga el deporte
que se está realizando en la cancha
*/

// La lista de los deportes con su nombre y un Number[2] con el inicio y fin del curso
const deportes = [
    { nombre: 'Fútbol', hora: [0, 3] },
    { nombre: 'Fútbol Americano', hora: [4, 6]},
    { nombre: 'Atletismo', hora: [7, 9] },
    // { nombre: "Gimnasia", hora: [16, 18] } // testing
];

// Preguntar por la hora y pasarla a Number
let hora = prompt(blue('¿Cuál es la hora? (Formato 24h) '));
hora = parseInt(hora);

// Si no es un número, es menor que 0 o es mayor que 21, sacar error
if (Number.isNaN(hora) ||
    hora < 0 ||
    hora > 21
) return handleError('Este es un número inválido! Asegúrate de que sea un número positivo mayor o igual que 0'+
' y menor o igual que 21.');

// Intenta encontrar el ítem (regresa un ?Object)
const deporte = deportes.find(elem => 
    elem.hora[0] <= hora &&
    elem.hora[1] >= hora
);

hora = formatHora(hora); // Ahora formateamos la hora
if (!deporte) return handleError(`No hay deporte a las ${hora}`); // Por si sale undefined

// De otra forma, proveer el output
log(stripIndents`La hora es: ${green(hora)}
Está el equipo de ${green(deporte.nombre)} entrenando`
);


/* Ejercicio 2
Cada vez que una persona ingrese un deporte, dirá el horario que le corresponde para la cancha
Esto lo puedo hacer con facilidad porque usé rangos en un array
*/

// Preguntar por el nombre del deporte
let nombre = prompt(blue('¿Cuál es el nombre del deporte? (Escribe sin tildes) '));

// Intenta encontrar el horario, regresa ?Object
// prompt-sync no acepta tildes al escribir (´), entonces las reemplazo con una función
const deporte2 = deportes.find(elem => formatNombre(elem.nombre) == formatNombre(nombre));
if (!deporte2) return handleError(`El deporte ${green(nombre)} no existe!`); // Por si sale undefined

// De otra forma, provee output
log(stripIndents`El deporte es: ${green(deporte2.nombre)}
Horario: ${green(`${formatHora(deporte2.hora[0])} a ${formatHora(deporte2.hora[1])}`)}`);

/** Para manejar errores
 * @param {string} err El error */
function handleError(err) {
    error(red(err));
    setTimeout(() => {
        console.clear();
        console.log(green('Cerrando el programa...'));
        setTimeout(() => {
            process.exit(0);
        }, 1000);
    }, 2000);
}

/** Formatear la hora con AM o PM porque me gusta más :p 
 * @param {number} hora La hora */
function formatHora(hora) {
    // 0 a 11: AM, 12 a 21: PM
    return hora <= 12 ? hora + 'AM' : hora - 12 + 'PM';
}

/** @param {string} nombre El nombre */
function formatNombre(nombre) {
    // String#replace leaves the string unchanged
    // bruh
    nombre = nombre.toLowerCase();
    nombre = nombre.replace(/á/g, 'a');
    nombre = nombre.replace(/é/g, 'e');
    nombre = nombre.replace(/í/g, 'i');
    nombre = nombre.replace(/ó/g, 'o');
    nombre = nombre.replace(/ú/g, 'u');
    return nombre;
}

// Arreglos
setTimeout(() => {
    console.log('\n\n' + blue('ARREGLOS'));
    let arregloNumerico = [1, 2, 3, 4, 5];
    let arregloNombres = ['Luis', 'Diana', 'Omar', 'Paola'];
    // eslint-disable-next-line no-sparse-arrays
    let arregloMixto = [20, 16, , 'Luis', , 'Paola', true, false];
    log(arregloNumerico, arregloNombres);
    log(arregloMixto);
    log(arregloNombres[0]);
}, 5000);