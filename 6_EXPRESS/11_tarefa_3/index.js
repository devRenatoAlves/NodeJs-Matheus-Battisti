const express = require ("express");
const app = express();
const http = require ("http");
const path = require ("path");

const router = express.Router()

//Variavel padrão para ter acesso as paginas
const basePath = path.join(__dirname,'templates');


const PORT = 5000;

//Arquivos Estáticos
app.use(express.static('public'));

// Definindo Router
app.use('/', router)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/home.html`)
})

router.get('/learn', (req, res) => {
  res.sendFile(`${basePath}/learn.html`)
})

router.get('/eggs', (req, res) => {
  res.sendfile(`${basePath}/eggs.html`)
})

app.use(function (req, res, next)  {
  res.status(404).sendFile(`${basePath}/error404.html`)
})


app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}/`)
})