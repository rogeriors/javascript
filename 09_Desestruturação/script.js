//DESESTRUTURAÇÃO DE OBJETOS

const pessoa = {
   nome: 'Rogério',
   idade: 35,
   endereco: {
      cidade: 'Maringá',
      estado: 'Paraná'
   }
}

const {nome, idade} = pessoa // puxando as informações dentro de pessoa

console.log(nome)

const {cidade, estado} = pessoa.endereco // puxando as informações dentro de endereco que esta dentro de pessoa

console.log(cidade)

// const {endereco:{cidade, estado}, endereco} = pessoa // esta pegando todas informações separada de cidade e estado e justas dentro de endereco

// console.log(endereco)

//DESESTRUTURAÇÃO DE ARRAYS

const arrCar = ['hb20','corola','gol',]
//posição      0       1       2

const [primeiroCarro, segundoCarro, terceiroCarro] = arrCar

console.log(segundoCarro)