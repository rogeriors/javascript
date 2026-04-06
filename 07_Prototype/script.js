 function Game(){
    this.pulou = () => alert('O personagem pulou')
    this.deitou = () => alert('O personagem deitou')
 }

Game.prototype.correu = () => alert('O personagem correu')
Game.prototype.bateu = () => alert('O personagem bateu com soco')

const novoJogo = new Game()

console.log(novoJogo)

const meuJogo = 'fifa'

console.log(meuJogo.toUpperCase())
