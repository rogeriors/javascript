// Iterar = loop que executa uma função(callback) para cada item da array

const estoque = ['arroz','feijão','arroz','macarrão','batatga','']
const precos = [3.50,5,3.50,2,2.50,0]
const pessoa = [{nome: 'Rogerio', idade: 35},{nome:'Rafaela', idade:33}]

estoque.forEach((valor, index, array) => { // forEach é um metodo sem retorno
    console.log(valor, index, array)
})

const retornoMap = estoque.map((valor, index, array) => { // retorna uma nova array com o valor e o index de cada um juntos
    return `${valor} ${index}`
})

console.log(retornoMap)


const precoReduce = precos.reduce((acc, valor, index, array) => { // nesse caso retorna a soma de todos os valores de precos
    return acc + valor
}, 0)

console.log(precoReduce)

const estFind = estoque.find((valor, index, array) => { // retorna o primero valor do array que seja True
    return valor
})

console.log(estFind)

const estFindIndex = estoque.findIndex((valor, index, array) => { // retorna o primero valor index(posição) do array que seja True
    return valor
})

console.log(estFindIndex)

const estSome = estoque.some((valor, index, array) => valor) // retorna um true ou false

console.log(estSome)

const estEvery = estoque.every((valor, index, array) => valor) // retorna true somente se todos os itens forem validos

console.log(estEvery)

const estFilter = estoque.filter((valor, index, array) => valor === 'arroz') // nesse caso esta filtrando todos os valores que sejam identico a 'arroz'

console.log(estFilter)