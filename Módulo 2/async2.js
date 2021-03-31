process.on('unhandledRejection', e => console.error(`${chalk.redBright('[Error]')} - ${e.stack}`));
process.on('uncaughtException', e => console.error(`${chalk.redBright('[Error]')} - ${e.stack}`));


/* Delay que hice
function delay(t, val) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val);
        }, t);
    });
}
(async function() {
    console.log('hola');
    await delay(5000);
    console.log('mundo');
    console.log('h');
})(); */


/* console.log('hola');
setTimeout(() => {
    console.log('mundo');
}, 3000);
console.log('h'); */


/* CALLBACKS
Declaramos la función primero, y su parámetro va a ser una función.
Va a regresar una función indefinida, pero sobre todo un valor ('primero')
Cuando se llame, esa función va a reemplazar el callback

Por instancia
primero(console.log); va a funcionar, porque va a reemplazar callback con console.log

primero(resultado1 => {
    console.log(resultado1);
}); va a funcionar, porque callback es reemplazado con una función cuyo parámetro (resultado1) es EL VALOR QUE REGRESÓ

Esto es como promises, pero sin usar .then lol
Por algo le llaman a los promises callbacks mejor estructurados

Se puede hacer un delay con callbacks para hacerlo sync
*/


function primero(callback) {
    setTimeout(() => {
        return callback('primero');
    }, 5000);
}

function segundo(callback) {
    return callback('segundo');
}

primero(resultado1 => {
    console.log(resultado1);
    segundo(resultado2 => {
        console.log(resultado2);
    });
});

