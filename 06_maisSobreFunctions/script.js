//Function Declaration

function teste(name){
    console.log(`Function declaration ${name}`)
}

teste('Rogerio')

//Function Expression

let teste2 = function(name){
    console.log(`Function Expression, ${name}`)
}

teste2('Rogerio')

//Arrow Function

let teste3 = (name) => {
    console.log(`Arrow Function, ${name}`)
}

teste3('Rogerio')


//Factory Function

const factoryFunction = (nome) => {
    return{
        logou: () => alert(`o usuario ${nome} logou`),
        deslogou: () => alert(`o usuario ${nome} deslogou`)
    }
}

factoryFunction('Rogerio').logou()

// Construction Function

function Pessoa(name, age) {
    this.nome = name
    this.idade = age
}

const pessoa1 = new Pessoa('Rogerio', 35)
const pessoa2 = new Pessoa('Rafaela', 33)

