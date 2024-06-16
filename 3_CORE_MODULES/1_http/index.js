
// IMPORTANDO O CORE MODULE
const http = require ("http")

// CRIANDO A PORTA NODE
const port = 3000

// CRIANDO O SERVER
const server = http.createServer((req, res) => {

    res.write("OI, Http")
    res.end()

})

//CONECTANDO A PORTAR AO SERVER
server.listen (port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})