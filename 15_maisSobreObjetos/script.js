const dados = {
    name: 'Rogerio',
    idade: 35
}

const endereco = {
    cidade: 'Mariná',
    estado: 'Paraná',
    ...dados // aqui faz o mesmo que o assign porem de uma forma mais limpa no código
}

Object.assign(dados, endereco) // atriui a dados os itens de endereco
console.log(dados)
console.log(Object.keys(dados)) // retorna todas as chaves do objeto (name, iadde)
console.log(Object.values(endereco)) // retorna todos os valores do objeto ('Maringá' 'Paraná')