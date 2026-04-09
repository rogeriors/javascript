// Sincrono --> processamento que acontece em sequência, ou seja ordenado

// Assincrono --> os processos podem acontecer ao mesmo tempo

// Promises - são tarefas Assincrona que podem ser aceita o rejeitada

const minhaPromise = new Promise((resolve, reject) => {
    let condicao = false
    if(condicao){
        resolve('Resolvido')
    } else {
        reject('Error')
    }
})

// then(callback de quando a função for resolvida) - catch(callback de quando a função for rejeitada) 


minhaPromise.then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.log(error)
})