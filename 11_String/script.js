const string = 'Linguagem JavaScript'
const string2 = 'de Programação'

// Lenght
// charAt
// toLowerCase
// toUpperCase
// endsWith
// startsWith
// includes
// concat
// substring
// slice
// padStart
// parEnd
// Split
// replace

console.log(string.length) // Tamanho total de caracteres
console.log(string.charAt(0)) // qual o caractere na posição passada entre charAt()
console.log(string.toLowerCase()) // deixa todos os caracteres em caixa baixa
console.log(string.toUpperCase()) // deixa todos os caracteres em caixa alta
console.log(string.endsWith('JavaScript')) // se a string esta terminando com a informação dentro de endsWith('')
console.log(string.startsWith('Linguagem')) // se a  string esta comesando com a informação dentro de startsWith('')
console.log(string.includes('JavaScript')) // se temos dentro da string a informação que esta informando dentro de includes('')
console.log(string.concat(string2)) // vai concatenar as informações das strings informada dentro de concat()
console.log(string.substring(1,4)) // vai pegar os caracteres dentro de 1 a 4 anulando o 4 'ing'
console.log(string.slice(-4)) // igual o substring porem posso usar numeros negativos -4 = "ipt"
console.log(string.padStart(25, '.')) // informando que a string tem que ter 25 caracteres, caso o tamanha seja menor que 25 caracteres é colocado o que foi informado entre '' antes da string '....Linguagem JavaScript' resultando em 25 caracteres
console.log(string.padEnd(25, '.')) // igual ao padStart porem adiciona no final
console.log(string.split(' ')) //ele divide a string em partes dentro de um Array, dividindo conforme a informação que colocar dentro de split('')
console.log(string.replace('i','a')) // nesse caso substitui o primeiro 'i' por 'a' resultando em "Languagem de Programação"