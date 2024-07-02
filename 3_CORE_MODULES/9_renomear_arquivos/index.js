const fs = require ('fs');

fs.rename("velhoarquivo.txt", "novoarquivo.txt", function (err) {

    if(err) {
        console.log(err)
        return
    }
    console.log("Nome do arquivo alterado com sucesso!")
})