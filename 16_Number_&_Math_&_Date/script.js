const numero = 10
const string = '20.9'
const numeroQuebrado = 10.8


// retornamos um número a partir de uma string
Number.parseFloat(string) // 20

//arredonda um número a partir de uma string, podendo definir a casa decimal
Number.parseInt(string, 10) // 20

//arredonda um número com base nas casas decimais
numeroQuebrado.toFixed() // 11

//retorna uma string a partir de um número
numero.toString() // '10'



//Math --> Objetivo nativo do JAVASCRIPT que possui métodos e propriedades de expreções matemáicas.

//retorna o valor absoluto
Math.abs(-5) // 5 

//arredonda o valor para cima
Math.ceil(4.3) // 5

//arredonda o valor para baixo
Math.floor(4.8) // 4

//arredonda para o número mais próximo
Math.round(4.3) // 4

//retorna um número aleatório entre 0 e 1 (colocando * 200(valor qualquer) cria de 0 até o valor)
console.log((Math.random() * 200).toFixed())

//retorna o maior número dentre os listados
console.log(Math.max(2,3,7,12))

//retorna o menor número detre os listados
console.log(Math.min(2,1,3,7,12))


const hoje = new Date()

hoje.getDate() // qual dia de hoje

hoje.getMonth() // qual o mês estamos

hoje.getFullYear() // qual o ano estamos

hoje.getHours() // retorna a hora

hoje.getMinutes() // retorna o minuto

hoje.getDay() // retorna o dia