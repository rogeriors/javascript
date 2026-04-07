class Mamifero{
   constructor(){
      this.especie = 'Mamifero'
   }

   dormir(){
      alert('Esse mamifero dormiu')
   }
}


class Pessoa extends Mamifero { // extends para extender as propriedades da class Mamifero dentro da class Pessoa, podendo ter acesso.
   constructor(name, idade){
      super() // necessario para chamar as informações de Mamifero
      this.name = name
      this.idade = idade
      this.cidade = 'Maringá'
   }

   static andou(){ // static só é executado dentro da class Pessoa
      alert(`${this.name} andou`)
   }

   dormir(){
      super.dormir() // pegando os parametros de dormir de Mamifero com o super
   }

   andou(){ // sem static pode ser chamado fora da class
      alert(`${this.name} andou`)
   }
}

const pessoa1 = new Pessoa('Rogério', 35)