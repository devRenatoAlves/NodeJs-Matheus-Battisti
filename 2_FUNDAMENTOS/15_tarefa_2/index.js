const inquirer = require ("inquirer")
const chalk = require ("chalk")

inquirer.prompt([{
    name: 'p1',
    message:"Qual é o seu nome?"
},
{
    name: 'p2',
    message: "Quantos anos você tem?"
},
])
.then((answers) => {
    const resposta = `Seu nome é ${answers.p1} e tem ${answers.p2} anos`
    console.log(chalk.black.bgYellow(resposta))
})
.catch((err) => {
    throw new Error ("Não é válido")
})