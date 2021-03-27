/* console.log('inicio');
function dos() { // Declaration
    console.log('dos');
}
function uno() { // Declaration
    console.log('uno');
    dos(); // Call
}
uno(); // Call
console.log('fin'); */

/* Expected SYNC
inicio
-
-
uno();
|-> dos();
fin */

console.log('inicio');
function dos() {
    setTimeout(() => {
        console.log('dos');
    }, 3000);
}
function uno() {
    setTimeout(() => {
        console.log('uno');
    }, 0);
    dos();
    console.log('tres');
}
uno();
console.log('fin');