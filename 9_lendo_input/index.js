const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual é o seu nome?', (nome) => {
    console.log(`Prazer ${nome}, me chamo Jason`)
    readline.close()
})