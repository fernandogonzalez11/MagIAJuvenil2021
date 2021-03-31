// Declarar una matriz
let matrizPeces = [
    ['Salmón', 'Atún'],
    ['Cangrejo', 'Pez Globo'],
];
console.log(matrizPeces[1][0]);

// Descomposición de objeto
let producto = {
    nombre: 'Chocolate',
    precio: 25,
    peso: '1.5 kg',
    cantidad: 5
};

let { nombre, peso } = producto;
console.log(nombre, peso);