function contagem() {
var inicio = document.getElementById('num1')
var fim = document.getElementById('num2')
var passo = document.getElementById('passo')
var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        return
    }
    
    n1 = Number(inicio.value)
    n2 = Number(fim.value)
    n3 = Number(passo.value)
    
    if (n3 <= 0) {
        alert("Obrigatório comerçar com valor = 1")
    }

    res.innerHTML = 'Contando: <br>'

    if (n1 < n2){  // se n1 for menor que n2 faça
        for (let c = n1; c <= n2; c = c + n3){
            res.innerHTML += `👉 ${c}`
        } 
    } else { // se for maior faça
        for (let c = n1; c >= n2; c = c - n3){
            res.innerHTML += `👉 ${c}`
        }    
    }
    res.innerHTML += ` 🏁`;

}