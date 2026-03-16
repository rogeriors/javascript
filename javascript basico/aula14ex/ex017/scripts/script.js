function tabuada() {
    // 1. Pegamos os elementos do seu HTML pelos IDs
    let num = document.getElementById('num');
    let tab = document.getElementById('opcoes');

    // 2. Validação: se o usuário não digitar nada, avisamos
    if (num.value.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        let c = 1;

        // 3. Limpamos o select antes de começar a nova tabuada
        tab.innerHTML = '';

        /* for(c; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`;
            tab.appendChild(item);
            item.value = `tab${c}`;
        } */
        
        // 4. Laço de repetição (enquanto c for menor ou igual a 10)
        while (c <= 10) {
            // Criamos o elemento <option>
            let item = document.createElement('option');
            
            // Definimos o texto que vai aparecer: Ex: 5 x 1 = 5
            item.text = `${n} x ${c} = ${n * c}`;
            
            // Adicionamos o item como "filho" do nosso select
            tab.appendChild(item);
            item.value = `tab${c}`;
            // Incrementamos o contador
            c++;
        }
    }
}