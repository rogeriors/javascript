// 1 - Variáveis

let nome = 'Rogerio';

console.log(nome);

nome = 'Rogerio Santos';

console.log(nome);

const idade = 35;

console.log(idade);

// idade = 36;

console.log(typeof nome);

console.log(typeof idade);

// 2 - mais sobre variáveis
// let 2teste = 'inválido';
// let @teste = 'inválido';

let a = 10, b=20, c=30;
console.log(a, b, c);

const nomecompleto = 'Rogerio Santos';

const nomeCompleto = 'Rogerio Rodrigues dos Santos';

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = 'ok'

let $teste = 'ok'

console.log(_teste, $teste);

// 3 - prompt

// const age = prompt('Digite a sua idade:');

// console.log(`você tem ${age} anos`)

// 4 - alert

// alert('testando')

// - 5 Math

console.log(Math.max(5, 2, 1, 10)); // Maior = 10

console.log(Math.floor(5.14)); // arredonda pra baixo - 5

console.log(Math.ceil(5.14)); // arredonda pra cima - 6

// 6 - console

console.log('texto');
console.error('erro na linha 10');
console.warn('aviso!');

// 7 - if

const M = 10

if (M > 5) {
    console.log(`${M} é maior que 5!`)
} 
const user = "João"

if (user === "João") {
    console.log(`Olá, ${user}!`)
}

// 8 - else

const N = 4

if (N > 5) {
    console.log(`${N} é maior que 5!`)
} else {
    console.log(`${N} não é maior que 5!`)
}

const User = "Maria"

if (User === "João") {
    console.log(`Olá, ${User}!`)
}   else {
    console.log('Usuário não encontrado!')
}

// 9 - else if 

if (1 > 2) {
    console.log ('Teste');
} else if (2 > 3) {
    console.log('Teste 2');
} else if (5 > 1) {
    console.log('Agora sim!')
}

const userName = 'Rogerio'

const userAge = 35

if (userName === 'José' && userAge === 35) {
    console.log(`Olá, ${userName} sua idade é de ${userAge} anos!`)
} else if (userName === "Rogerio" && userAge === 35) {
    console.log(`Olá, ${userName} sua idade é de ${userAge} anos!`)
} else {
    console.log('Nenhuma das condições são validas')
}

// 10 - While

let p = 0

while (p < 5) {
    console.log(`repete ${p}`)
    p = p + 1
}

// loop infinito While 
// let x = 10

// while (x > 5) {
//     console.log(`Loop ${x}`)
// }

// 11 - do while

let o = 10

do {
    console.log(`${o}`)
    o--;
} while (o > 1);

// 12 - for

for (let t = 0; t < 10; t++) {
    console.log(`t se repete ${t} vezes`)
}

let v = 10;
 
for (v; v > 0; v--) {
    console.log(v)
}

// 13 - break

for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);

    if (g === 15) {
        console.log(`O g é ${g}!`);
        break;
    }
}

// 14 - continue

for (let s = 1; s < 10; s++) {
    // operador resto = %
    if (s % 2 === 0) {
        console.log(`${s} Número par!`)
        continue;
    }
    console.log(`${s} Número impar!`);
}

//  15 - switch

const w = 'Programador'

switch (w) {
    case "Engenheiro":
        console.log("Você é um Engenheiro");
        break;
    case "Advogado":
        console.log("Você é um Advogado");
        break;
    case "Programador":
        console.log("Você é um Programador");
        break;
    default:
        console.log("Profissão não encontrada");
}