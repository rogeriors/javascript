// 1 - criando uma função

function minhaFuncao () {
    console.log('Testando');
}

minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();

function funcaoComParametro (txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro('Imprimindo alguma coisa');
funcaoComParametro('Teste de texto')

// 2 - return

const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, c);

console.log(resultado);

console.log(soma(c, d));


const e = 1000
const f = 50
const g = 75

function vezes(num1, num2) {
    return num1 * num2;
}

console.log(vezes(e, g))

function resto(rest1, rest2) {
    return rest1 % rest2;
}

console.log(`o resto de ${e} com ${g} é igual a: ${resto(e, g)}` );

// 3 - escopo da função

let y = 10;

function testeEscopo() {
    let y = 20;
    console.log(`Y dentro da função é ${y}`);
}


testeEscopo();

console.log(`Y fora da função é ${y}`);

testeEscopo();


let l = 5;

function numTeste() {
    let l = 75;
    console.log(`l dentro da função é ${l}`);
}

numTeste();

console.log(`l fora da função é ${l}`);

// 4 - escopo aninhado

let m = 10;

function escopoAninhado() {
    let m = 20;

    if(true) {
        let m = 30;

        if(true) {
            let m = 40;
            console.log(m);
        }
        console.log(m);
    }
    console.log(m);
}

escopoAninhado();

console.log(m);

// 5 - Arrow function

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log('Par');
        return;
    }
    console.log('Impar')
}

parOuImpar(5);

parOuImpar(10);

const parImpar = (num => {
    if(num % 2 === 0) {
        console.log('Par');
    } else {
        console.log('Impar')
    }
})

parImpar(5);
parImpar(10);

// 6 - mais sobre arrow function

const raizQuadrada = (x) => x * x;

console.log(raizQuadrada(5));

// 7 - parametro opcional

const multiplication = function(m, n) {

    if(n === undefined) {
        return m * 2
    } else {
        return m * n
    }
}

const greeting = (nome) => {

    if(!nome) {
        console.log('Olá!');
        return
    }
    console.log(`Olá, ${nome}!`);
}

greeting();

greeting("Rogerio");

// 8 - valor default

const customGreeting = (name, greet = 'Olá') => {
    return `${greet}, ${name}`;
};

console.log(customGreeting('Rogerio'));
console.log(customGreeting('Rogerio', 'Bom dia'))

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
}

repeatText('Testando');

repeatText('repete 10 vezes', 10);

// 9 - closure

function someFunction() {
    let txt2 = 'Alguma coisa'

    function display() {
        console.log(txt2);
    }
    display();
}

someFunction();

// 10 - mais sobre closure

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    }
}

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1);

console.log(c2);

console.log(c1(5));

console.log(c2(10));