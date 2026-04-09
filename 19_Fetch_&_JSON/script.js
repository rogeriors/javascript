// Fetch - retorna resolução de uma promise, permitindo que façamos requisiçoes HTTP utilizando o then e o catch

// Com uma requisição HTTP que vamos conseguir enviar, receber, deletar ou alterar um determinado valor.

// Adicionar um novo usuário
// Front-end --> fetch --> retorna uma promise http --> Back-end --> armazena no banco de dados

// Verbos HTTP
// GET --> quando o client(front end) solicita algum dado (back end)
// POST --> queremos enviar algum dado a partir do cliente.
// DELETE --> queremos deletar algum dado específico
// PATCH --> alterar um dado mais abrangente
// PUT --> alterar algum dado específico

// CRUD - Create Read Update Delete


// Endpoint --> Nada mais é do que uma URL
// O resposavel por criar os endpoints, e denominar a responsábilidade de cada endpoint é o back end

// Um endpoint para criar um usuário
// Um endpoint para deletar um usuário
// Um endpoint para alterar dados de um usuário


// HTTP --> 4 tipos de parâmetros em uma requisição HTTP

// Route Params - requisição enviada na URL para o backend com um /
// Query Params - ao final da URL colocamos ? e a seguir os dados a enviar id=123456131&name=Rogerio&age=35
// Body Params
// Header Params

// API --> Application programming interface --> Back end que estamos interagindo

// CORS

fetch('https://api.coingecko.com/api/v3/exchange_rates', 
    {
        mode: 'cors', 
        method: 'POST',
        body:{
            name: 'Rogério',
            age: 35
        },
        headers:{

        }
    }).then((data) => {
    console.log(data)
})

// Sucesso - 200 - 299 
// Redirecionamento - 300 - 399
// Erro no client - 400 - 499
// Erro do servidor - 500 - 599


//recebemos normalmente um arquivo JSON como resposta
// JSON --> JAVASCRIPT OBJECT NOTATION

// JSON é um formato de organização de dados
// a diferetença do JSON pro Objeto normal do javascript é que a chave do objeto JSON deve ser em formato de string
// Comun JSON ser usado com extensão para arquivos também normalmente de configurações.

const obj = '{"name": "Rogerio", "age": 35}'
const obj2 = {name: 'Rogerio', age: 35}

console.log(JSON.parse(obj)) // VAI BASSICAMENTE TRANSFORMAR UMA STRING EM FORMATO DE JSON EM UM OBJETO JAVASCRIPT
console.log(JSON.stringify(obj2)) // VAI PEGAR UM OBJETO JAVASCRIPT E VAI TRANSFORMAR EM UMA STRING EM FORMATO JSON