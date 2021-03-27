const { log } = console;

const rng = (num) => log(Math.round(Math.random() * num));
rng(10);

// Métodos de strings
let str = 'Hola Lucía, buenas tardes';
log('length:', str.length);
log('indexOf:', str.indexOf('Lucía'));
log('slice:', str.slice(5, 10));
log('replace:', str.replace('Lucía', 'Ángel'));
log('toUpperCase:', str.toUpperCase());
log('toLowerCase:', str.toLowerCase());
log('concat', str.concat(', cómo estás?'));

module.exports = rng;