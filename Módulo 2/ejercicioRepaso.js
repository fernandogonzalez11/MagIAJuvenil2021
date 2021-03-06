/* Ejercicio de repaso práctica 1

Para calcular el promedio del curso
4 prácticas van a ser calificadas
De las 4 se elimina la que tiene menor calificación y se obtiene el promedio de las 3 restantes */

const practica1 = 8,
    practica2 = 9,
    practica3 = 10,
    practica4 = 7;

// Todo esto es lo mismo que 
// const califMenor = Math.min(practica1, practica2, practica3, practica4);
var califMenor = practica1;
if (practica2 < califMenor) califMenor = practica2;
else if (practica3 < califMenor) califMenor = practica3;
else if (practica4 < califMenor) califMenor = practica4;
console.log(califMenor);

var resultado = (practica1 + practica2 + practica3 + practica4 - califMenor) / 3;
console.log(resultado);