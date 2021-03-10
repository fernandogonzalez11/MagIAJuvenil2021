const { log } = console;
/* Ejemplo
Dado un número separarlo en centenas, decenas y unidades
Intercambiar la posición entre las centenas y las unidades e imprimir el número final 

738
7 -> 8
3 
8 -> 7
impr 837
*/
// No sabía que se podía usar parseInt con números pensé que era sólo strings lol
let numInicial = 738;
if (numInicial < 1000 && numInicial > 99) {
    let centenas = parseInt(numInicial / 100),
        decenas =   parseInt(numInicial % 100 / 10),
        unidades = parseInt(numInicial % 10);
    log("Valor final:", centenas, decenas, unidades); // Expected: 7 3 8
    const tempCentenas = centenas;
    centenas = unidades;
    unidades = tempCentenas;
    log("Intercambiado:", centenas, decenas, unidades);
} else log("Ingresa un número de 3 cifras");

// Condicional Switch
let cond = "Luis", edad = 18;
switch (cond) {
    case 2: 
        log("El valor es 2");
        break;
    case 6: 
        log("El valor es 6");
        break;
    case "Luis":
        log("Hola Luis");
        if (edad == 18) console.log("Felicidades, eres mayor de edad!");
        break;
    default:
        log("El valor es otro");
        break;
}