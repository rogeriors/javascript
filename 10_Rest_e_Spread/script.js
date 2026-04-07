//REST

function estados(...estados){ // os ... chama o REST
   console.log(estados[3])
}

estados('PR', 'SC', 'SP', 'RJ')
//       0     1     2     3

//SPREAD ----------------------------------------------

const carrosAltos = ['Hilux','S10','Ranger']
const carrosBaixos = ['Gol','Palio','Uno']

const carros = [...carrosAltos,...carrosBaixos] // Spread tambem usa os ... para juntar duas insofrmações totais de dois ou mais Arrays

console.log(carros)

// ----------------------------------------------------- 

const pessoa = {
   nome: 'Rogerio',
   idade: 35,
   profissao: 'Programador'
}

const endereco = {
   estado: 'Paraná',
   cidade: 'Maringá',
}

const dados = {
   ...pessoa,
   ...endereco,
   altura: 1.75
}

console.log(dados)