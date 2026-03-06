// 1 - Numeros

console.log(typeof 2);
console.log(typeof 57.2);
console.log(typeof -127);

// 2 - Operadores aritméticos

console.log(2 + 4);
console.log(2 + (5 * 3));
console.log( 100 / 53);

// 3 - Especial Number

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "texto");
console.log(typeof NaN);

// 4 - Strings

console.log("Texto");
console.log('Texto');
console.log(typeof 'Texto');
console.log(`Texto`);

// 5 - Símbolos especiais em string

console.log('testando a \nquebra de linha')
console.log('teste de espaçamento \tTab em um texto')

// 6 - Concatenação

console.log('Oi, ' + 'tudo ' + 'bem?');

//  7 - Interpolação (Template strings)

console.log(`A soma de 2 + 2 é: ${2 + 2}`);

// 8 - Boolens

console.log(5 > 20);
console.log(30 > 10);
console.log(typeof false);

// 9 - Comparações

console.log(5 <= 5);
console.log(20 <= 10);
console.log(10 == 5);
console.log(10 == 10);
console.log(10 != 9);
console.log(100 === 100);

// 10 - Idêntico

console.log(9 == '9'); // true -  avalia se os dados são iguais independente do tipo "dados OU tipos"

console.log(9 === '9'); // false -  avalia se os dados e os tipos são iguals "dados E tipos"

console.log(9 != '9'); // false - avalia se os dados são diferente independente do tipo "dados OU tipos"

console.log(9 !== '9'); // true -  avalia se os dados e os tipos são direfentes "dados E tipos"

// 11 - Operadores Lógicos

/* && = AND (E)
|| = OR (OU)
! = NOT (Inverte Comparação) */

console.log(true && true); //true
console.log(true && false); //false
console.log(5 > 2 && 2 < 10); //true
console.log(5 > 2 && 'Mateus' === 1); //false

console.log(5 > 2 || 'Mateus' === 1); //true
console.log(5 > 2 || 5 > 100); //true

console.log(!true); //false
console.log(!5 > 2); //false

// 12 - Empty values

console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - Mudança de tipos

console.log(5 * null);

console.log('teste' * 'opa');

console.log('10' + 1);

console.log('10' - 1);