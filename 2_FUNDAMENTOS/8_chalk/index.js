const chalk = require ('chalk')

const nota = 5

if (nota >= 6) {
    console.log(chalk.green('Parabens, voce foi aprovado'))
} else {
    console.log(chalk.white.bgRed('Reprovado lek'))
}