function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    const section = document.querySelector('section');
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#fdce7f'
        section.style.backgroundColor = '#5e550567'
        msg.style.color = '#fff'
    } else if (hora <18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e2a03e'
        section.style.background = '#6b3c0665'
        msg.style.color = '#fff'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#275e6d'
        section.style.background = '#0000005b'
        msg.style.color = '#fff'
    }
}