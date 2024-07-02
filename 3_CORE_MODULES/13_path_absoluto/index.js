const path = require ('path')

//Path Absoluto
//console.log(path.resolve('teste.txt'))

//Formar Path

const midFolder = "relatorios";
const fileName = "renato.txt"

console.log(path.join( "/" , "naton", midFolder, fileName))