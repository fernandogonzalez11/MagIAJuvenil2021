const { log } = console;

// Ejemplo #1
let persona = {
    nombre: 'Omar',
    apellido: 'Guerrero',
    edad: 20
};

let { nombre, apellido } = persona;

log('El nombre de la persona es:', nombre, apellido);
// Sin destructuración: persona.nombre, persona.apellido //

// Ejemplo #2
let celular = { color: 'Rojo', numCamaras: 4 };
let { numCamaras } = celular;
log(numCamaras);

// Ejemplo #3
let paquete = {
    idEnvio: 'b7a82f',
    alto: 25,
    ancho: 26,
    peso: 300, // gramos
    contiene: 'Cirno FumoFumo AngelType Gift',
    direccion: '12E Rue La Vie, Chenoi, Francia'
};
let idEnvio, peso;
({ idEnvio, peso } = paquete);
log(idEnvio);

// Valor por defecto
let persona2 = { nombre2: 'Omar', edad: 20 };
let { nombre2, apellido: apellido3 = 'López' } = persona2;
console.log('El nombre es:', nombre2, apellido3);

let envio = {
    numEnvio: '337',
    producto: 'Videojuego'
};

function datosEnvio({ numEnvio, producto }) {
    console.log('Número del envío:', numEnvio,
        '\nProducto a enviar:', producto);
}

datosEnvio(envio);

let obj = {
    other: {
        otherother: {
            thing: 'this'
        }
    }
};

// Nested destructuring (esto siempre lo quise saber jsjsj)
const {other: { otherother: { thing } }} = obj;
console.log(thing);