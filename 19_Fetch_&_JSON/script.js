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

// Route Params
// Query Params
// Body Params
// Header Params

// API --> Application programming interface --> Back end que estamos interagindo

// CORS

fetch('https://api.coingecko.com/api/v3/exchange_rates', {mode: 'cors', method: 'POST'}).then((data) => {
    console.log(data)
})