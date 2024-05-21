// nome 

console.log (process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1] 

console.log(nome)

const idade = args[1].split('=')[1]

console.log(idade)

const cidade = args[2].split('=')[1]

console.log(cidade)

console.log(`O nome dele é ${nome} e possui ${idade} anos e mora em ${cidade}`)
