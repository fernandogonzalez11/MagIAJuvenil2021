// Usar chalk
const { blue, green } = require("chalk");
// Acortar console.log() a solo log()
const { log } = console;

let a = 70, b = 50, c = 30;
log(blue("ESTRUCTURAS DE CONTROL"));

// Condicional if-else
if ((a < b) && (b < c)) { // Si esto da true
    log("Estás en el", green("if"));
}
else if (a < c) {
    log("Estás en el", green("else if"));
}
else {       // Si esto da false 
    log("Estás en el", green("else"));
}