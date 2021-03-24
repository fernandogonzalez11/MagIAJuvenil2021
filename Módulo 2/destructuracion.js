const { log } = console;

// Ejemplo #1
let persona = {
    nombre: 'Omar',
    apellido: 'Guerrero',
    edad: 20
};

let { nombre, apellido } = persona;

log('El nombre de los participantes es:', nombre, apellido);
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
const { apellido: apellidoSustituto = 'López' } = persona;
console.log('El nombre es:', nombre, apellido);