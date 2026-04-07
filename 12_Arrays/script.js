const array = ['gol','hb20','hilux','gol','palio']
const array2 = ['gol','hb20','hilux','palio']
const arrayNum = [1,5,7,8,9,4]

// Length
// unshift
// shift
// push
// pop
// from
// isArray
// join
// concat
// of
// new Array
// Array
// include
// sort
// reverse
// indexOf
// LastIndexOf

console.log(array.length) // mostra a quantidade de itens dentro do Array
console.log(array.unshift('gol quadrado')) // adiciona um novo item ao inicio do Array
console.log(array.shift()) // remove o primeiro item do Array, no caso o 'gol quadrado' que foi criado anteriormente
console.log(array.push('gol quadrado')) // adiciona um novo item ao final do Array
console.log(array.pop()) // remove o ultimo item do Array, no caso o 'gol quadrado' que foi criado anteriormente
// console.log(Array.from()) //
console.log(Array.isArray(array)) // vai retornar um bulean true ou false se é um array ou nao
console.log(array.join()) // reune todos os itens do array em formato de string colocando uma virgula entre cada como padrao
console.log(array.concat(array2)) // para concatenar o array atual com outro array
console.log(Array.of(1,2,3,4)) // constroe um array com os itens passado entre ()
console.log(new Array(1,2,3,4)) // função construtora para cria um novo array
console.log(Array(1,2,3,4)) // cria um array
console.log(array.includes('hb20')) // verifica se o item colocado entre () existe no array ou não, retornando um true ou false
console.log(arrayNum.sort()) // ordena de forma numerica os itens do array de ordem crescente
console.log(array.reverse()) // inverte a ordem dos itens do array do ultimo para o primeiro
console.log(array.indexOf('gol')) // retorna a posição do item a procurar dentro do Array
console.log(array.lastIndexOf('gol')) // retorna a ultima posição do item dentro do Array mensionado entre () dentro 



