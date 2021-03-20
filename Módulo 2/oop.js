let celular = {
    color: 'Azul',
    peso: 140, // gramos
    numCamaras: 4,
    sistema: 'Android', // imagine ios lmfao
    duracionBateria: 10 // horas
};
console.log(celular.peso, celular['sistema']);


// Class
class Galleta {
    // Constructor
    // Esto se va a pasar a la copia cuando se llame
    constructor(tamaño, forma, sabor) {
        this.tamaño = tamaño;
        this.forma = forma;
        this.sabor = sabor;
    }
}

const galleta1 = new Galleta('5x5cm', 'Cuadrado', 'Chocolate');
const galleta2 = new Galleta('3 cm', 'Círculo', 'Vainilla');

console.log(galleta1);
console.log(galleta2);
console.log(galleta1.sabor, galleta2['sabor']);