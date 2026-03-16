function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.lenght == 0 || Number(fAno.value) > ano) {
        res.style.color = 'red'
        res.innerHTML = '[ERRO] Verifique os dados e tente novamente!'
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-menino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-menino.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-menina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectams ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}