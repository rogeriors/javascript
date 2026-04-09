// As funções também são criadas com um construtor, o function, por isso ele herda seus métodos e propriedades

//Propriedades

function retornaNome(nome) {
    console.log(nome, this.profissao, this.cidade)
}

//length
retornaNome.length // retorna a quantidade de parametros
retornaNome.name // retornaNome - retorna o nome da function

// Principais Métodos

retornaNome.call({profissao: 'Programador', cidade: 'Maringá'},'Rogério', 35) // executa a função podendo passar um novo valor para this
retornaNome.apply({profissao: 'Programador', cidade: 'Maringá'},['Rogério', 35]) // executa a função podendo apssar um novo valor para this, agora com os argumentos são apssados em um array
const novaFunction = retornaNome.bind({profissao: 'Programador', cidade: 'Maringá'}, 'Rogério', 35) // retorna a função podendo passar um novo valor para this.

novaFunction()