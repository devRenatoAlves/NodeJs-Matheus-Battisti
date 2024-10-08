const express = require ("express");
const app = express();
const port = 3000; //Variavel ambiente
const path = require ("path");

const basePath = path.join(__dirname, 'templates');

const checkAuth = function(req, res, next) {

  reqauthStatus = false

  if(reqauthStatus){
    console.log('Está Logado!')
    next()
  }else {
    console.log('Não está logado, faça o login para continuar')
  }
  next()

}

app.use(checkAuth)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)  
});

app.listen(port, () => {

  console.log(`App rodando na porta ${port}`)

});