// Uma variavel criada fora pode ser acessada dentro da função.
// Uma variavel criada dentro de uma função não pode ser acessada fora.
// Pra criar uma variavel use sempre const e let

const valor = 'Rogério'

function teste() {
    console.log(valor)
}