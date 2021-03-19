/** @param {number} operando */
function multiplica(operando) {
    console.log('El resultado es:', operando * 2);
}

multiplica(53);

/** @param {number} operando */
let resultado = (operando) => operando * 2;

console.log(resultado(25));

/** 
 * @param {number} num1 
 * @param {number} num2 */
function suma(num1, num2) {
    return num1+num2;
}
console.log(suma(15, 26));

const saludar = (persona) => console.log('Feliz cumpleaños,', persona);
saludar('Guillermo');

/* Ejercicio
Escribir un programa con una función a la que se le pasa un número
Se devuelve como resultado un texto que indica si el número es par o impar */
const par = (numero) => numero % 2 == 1 ?
    console.log(`El número ${numero} es impar`) :
    console.log(`El número ${numero} es par`);

par(25);
par(5456156571658);

/** @param {string} palabra */
function palabra(palabra) {
    if (palabra.toUpperCase() == palabra) console.log(`La palabra ${palabra} tiene mayúsculas`);
    else if (palabra.toLowerCase() == palabra) console.log(`La palabra ${palabra} tiene minúsculas`);
    else console.log(`La palabra ${palabra} tiene mayúsculas y minúsculas`);
}
palabra('REIMU FUMO');
palabra('cirno fumo');
palabra('Yuyuko Fumo');