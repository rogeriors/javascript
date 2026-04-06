/*// 1 - Arrays
const lista = [1, 2, 3, 4, 5] 
console.log(lista)
console.log(typeof lista)

const lista2 = [10, 'Rogerio', true, 4.12, []]
console.log(lista2)
console.log(typeof lista2)

// 2 - mais sobre array

const arr = ['a', 'b', 'c', 'd']
//            0    1    2    3
console.log(arr[0]) // imprimira o a

console.log(arr[3]) // imprimira o d

console.log(arr[10])// nao existe (indefinido)

// 3 - propriedades
const numbers = [5, 3, 4]
console.log(numbers.length) // tamanho da variavel numbers (quantia de dados)

const myName = 'Rogerio'
console.log(myName.length) // tamanho da variavel (quantia de caracteres)

// 4 - metodos

function adicionarNome() {
    let inputElements = document.getElementsByName('inputNome');
    
    if (inputElements.length === 0) return;
    let name = inputElements[0].value.trim();


    let tUl = document.querySelector('#lista');

    if (!name) {
        alert('Digite um nome válido');
        return;
    }

    let li = document.createElement('li');
    li.innerText = name;
    tUl.appendChild(li);
    inputElements[0].value = '';
}
*/

const nome = {
    completeName: 'Rogerio Rodrigues dos Santos',
    idade: 36,
    estado: 'Paraná',
    showMessage: function(){
        alert('Olá')
    }
}

console.log(nome)


const arr = ['Rogerio', 'Rafaela', 'Miguel', 'Felipe']
//              0           1         2         3

 const matriz = [
    ['Honda','toyota','Hyundai'],
    ['Rogerio', 'Rafaela'],
    ['Programador', 'Engenheiro']
]

// Operador Ternario

console.log(matriz)

const n1 = 0 // False
const n2 = 2 // True

n1 ? alert('Retornou True') : alert('Retornou False')
//             True                   False     