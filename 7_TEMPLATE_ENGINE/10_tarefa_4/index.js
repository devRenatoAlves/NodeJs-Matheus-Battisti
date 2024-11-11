const exphbs = require ("express-handlebars");
const express = require ("express");
const PORT = 3000;
const app = express();

const hbs = exphbs.create({
  partialsDir: ['views/partials']
});
  
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static('public'));

app.get('/cars/:modelo', (req, res) => {
  const { modelo } = req.params;

  const carros = {
    corolla: { marca: 'Toyota', cor: 'prata', ano: 2012 },
    civic: { marca: 'Honda', cor: 'preto', ano: 2020 },
  };

  const carro = carros[modelo.toLowerCase()];

  if (carro) {
    res.render('homecars', { carro });
  } else {
    res.status(404).send('Carro não encontrado');
  }
});

app.get('/', (req, res) => {

  const aparecer = true;

  res.render('home', {aparecer});
});

app.listen( PORT, () => {
  console.log("Server Aberto!")
})