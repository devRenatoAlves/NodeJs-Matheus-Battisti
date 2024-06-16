
// IMPORTANDO O CORE MODULE
const http = require ("http")

// CRIANDO A PORTA NODE
const port = 3000

// CRIANDO O SERVER
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Contenty-Type' , 'text/html')
    res.end('<h1>Olá, este é meu primeiro server com HTML!</h1>')
})

//CONECTANDO A PORTAR AO SERVER
server.listen (port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})