const express = require ("express");
const exphbs = require ("express-handlebars");
const mysql = require ("mysql");

//INICIO DAS CONFIGURAÇÕES PADRAO

const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

// FIM

app.get("/", (req, res) => {
  res.render("home")
});

app.post("/books/insertbook", (req, res) => {

  const title = req.body.title
  const pageqty = req.body.pageqty
  
  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`

  conn.query(sql, function(err) {
    if(err) {
      console.log(err)
    }

    res.redirect('/')
  })
});


//Definindo conexão com Banco de Dados mySQL

const conn = mysql.createConnection({
  host:"localhost",
  user: "root",
  password: "",
  database: "nodemysql2",
});

//Conectando Banco de dados e abrindo server

conn.connect(function(err) {

  if(err) {
    console.log(err)
  }

  console.log("Conectou ao MySQL!")

  app.listen(3000)

})

