const inquirer = require ("inquirer")

inquirer.prompt({
    name: 'p1',
    message: "Qual a primeiro nota?"
},
{
    name: 'p2',
    message: "qual é segunda nota?"
})
.then((answers) => {
    console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2

    console.log(`Sua média é: ${media}`)
})
.catch(err => console.log(err))

