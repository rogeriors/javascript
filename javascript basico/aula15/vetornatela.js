let num = [3, 5, 8, 7, 2, 1, 9]
console.log(num)

/*for (let pos = 0; pos < num.length; pos++) {
        console.log(`posição ${pos}: valor ${num[pos]}`)
} */

for (let pos in num) {
    console.log(`posição ${pos}: valor ${num[pos]}`)
}

let posicao = num.indexOf(4)

if (posicao == -1) {
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor está na posição ${posicao}`)
}

