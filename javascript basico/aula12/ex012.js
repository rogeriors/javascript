let dia = new Date()
let hora = dia.getHours()
let minuto = dia.getMinutes()
console.log(`Hora atual ${hora}:${minuto}`)
if (hora < 6) {
    console.log(`Boa madrugada!`)
} else if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora < 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}
