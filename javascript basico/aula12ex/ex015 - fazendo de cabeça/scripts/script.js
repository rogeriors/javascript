function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var msg = document.getElementById('res')
    var img = document.getElementById('img')

    // Verificação de erro = 0 ou maior que o ano atual
    if (fAno.value.lenght == 0 || Number(fAno.value) > ano) {
        msg.style.color = 'red'
        msg.innerHTML = '[ERRO] Verifique os dados novamente!'

    // Caso Verificação falso faça verificação genero e calculo idade 
    } else {
        var idade = ano - Number(fAno.value) // Calculo idade
        var sex = document.getElementsByName('radsex') //pegando name da radio
        var genero = ''
        if (sex[0].checked) { //checando 0 como masculino
            genero = 'Masculino'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.src = 'imagens/bebe-menino.png'
            } else if (idade < 21) {
                // Jovem
                img.src = 'imagens/jovem-homem.png'
            } else if (idade < 50) {
                // Adulto
                img.src = 'imagens/adulto-homem.png'
            } else {
                // Idoso
                img.src = 'imagens/idoso-homem.png'
            }
        } else if (sex[1].checked){ // checando 1 como feminino
            genero = 'Feminino'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.src = 'imagens/bebe-menina.png'
            } else if (idade < 21) {
                // Jovem
                img.src = 'imagens/jovem-mulher.png'
            } else if (idade < 50) {
                // Adulto
                img.src = 'imagens/adulto-mulher.png'
            } else {
                // Idoso
                img.src = 'imagens/idoso-mulher.png'
            }
        }
       
    }
    msg.innerHTML = `idade ${idade} ${genero}` 
}