const express = require ("express");
const exphbs = require ("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ['views/partials']
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/dashboard", (req,res) => {
  
  const items = ['item a', 'item b', 'item c'];

  res.render("dashboard", {items});
});

app.get("/post", (req, res) => {

  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo irá te ajuda a aprender Node.js!",
    comments: 4
  };

  res.render("blogpost", {post});
})

app.get("/blog", (req, res) => {

  const posts = 
  [
    {
      title: "Aprender PHP",
      category: "PHP",
      body: "Teste",
      comments: 2
    },
    {
      title: "Aprender Pythom",
      category: "Pythom",
      body: "Teste",
      comments: 12
    },
    {
      title: "Aprender Node.js",
      category: "JavaScrip",
      body: "Teste",
      comments: 3 
    }
  ]

  res.render("blog", {posts});  
})

app.get('/', (req, res) => {

  const user = {
    name: "Matheus",
    surname: "Battisti"
  };

  const auth = true;

  const approved = true;

  res.render("home", {user: user, auth, approved});
});

app.listen(3000, () => {
  console.log("App está rodando dibas")
});