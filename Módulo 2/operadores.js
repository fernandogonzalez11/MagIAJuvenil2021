// Usar chalk
const { blue } = require('chalk');
// Acortar el console.log() a solo log()
const { log } = console;

// Declarar operandos
let op1 = 10, op2 = 4, op3 = 300, op4 = 15;

/* OPERADORES ARITMÉTICOS */
log(blue('OPERADORES ARITMÉTICOS'));

// Adición ( + )
let res = op1 + op2;
log('Adición:', res);

// Substracción ( - )
res = op1 - op2;
log('Substracción:', res);

// Multiplicación ( * )
res = op1 * op2;
log('Multiplicación:', res);

// División ( / )
res = op3 / op4;
log('División:', res);

// Exponente ( ** )
res = op1 ** op2; // Math.pow(op1, op2)
log('Exponente:', res);

// Módulo ( % )
res = op1 % op2;
log('Módulo:', res);

// Incremento ( ++ )
res = op1++;
log('Incremento:', res);

// Decremento ( -- )
res = op1--;
log('Decremento:', res);


/* OPERADORES DE ASIGNACIÓN */
log('\n' + blue('OPERADORES DE ASIGNACIÓN'));

// Asignación normal ( = )
op1 = 7;
log('op1 ahora es:', op1);

// Asignación con adición ( += )
op1 += 3;
log('op1 más 3:', op1);

// Asignación con substracción ( -= )
op1 -= 4;
log('op1 menos 4:', op1);

// Asignación con multiplicación ( *= )
op1 *= 2;
log('op1 por dos:', op1);

// Asignación con división ( /= )
op1 /= 3;
log('op1 entre tres:', op1);

// Asignación con módulo ( %= )
op1 %= 3;
log('módulo de op1 con 3:', op1);
 

/* OPERADORES LÓGICOS */
log('\n' + blue('OPERADORES LÓGICOS'));
op1 = 5, op2 = 5, op3 = 10, op4 = '5';

// Igual que ( == )             // valor
res = op1 == op2; // 1
log('5 == 5:', res);
res = op1 == op3; // 2
log('5 == 10:', res);
res = op1 == op4; // 3
log('5 == "5":', res);

// Igual que estricto ( === )   // valor y tipo
res = op1 === op2; // 1
log('5 === 5:', res);
res = op1 === op3; // 2
log('5 === 10:', res);
res = op1 === op4; // 3
log('5 === "5"', res);

// Diferente que ( != )         // valor
res = op1 != op2; // 1
log('5 != 5:', res);

// Diferente que estricto (!==) // valor y tipo
res = op1 !== op2; // 1
log('5 !== 5:', res);

// Mayor que ( > )
res = op1 > op3;
log('5 < 10:', res);

// Menor que ( < )
res = op1 < op3;
log('5 > 10:', res);

// Mayor o igual que ( >= )
res = op1 >= op3;
log('5 >= 10:', res);

// Menor o igual que ( <= )
res = op1 <= op3;
log('5 <= 10:', res);

/* OPERADORES LÓGICOS BOOLEANOS */
op1 = 5, op2 = 20, op3 = 30;

// Operador AND/Y ( && )
res = (op1 < op2) && (op2 < op3);
log('Operador AND:', res);

// Operador OR/O ( || )
res = (op1 < op2) || (op2 < op3);
log('Operador OR:', res);

// Operador NOT/NO ( ! )
res = !((op1 < op2) || (op2 < op3));
log('Operador NOT:', res);

/*
true && true -> true
true && false -> false
false && true -> false
false && false -> false

true || true -> true
true || false -> true
false || true -> true
false || false -> false

!true -> false
!false -> true
*/