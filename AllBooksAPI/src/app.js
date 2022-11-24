import express from "express";
import db from "./config/dbConnect.js";
//import livros from "./model/Livro.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";

db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Conectado ao banco de dados");
});

const app = express();

app.use(express.json());

routes(app);

// const livros = [
//   {
//     id: 1,
//     titulo: "O Senhor dos Anéis",
//   },
//   {
//     id: 2,
//     titulo: "O Hobbit",
//   },
// ];

// app.get("/livros", (req, res) => {
//   livros.find((err, livros) => {
//     res.status(200).json(livros);
//   });
// });

// app.get("/", (req, res) => {
//   res.status(200).send("Hello World!");
// });

// app.get("/livros/:id", (req, res) => {
//   let livroIndex = getLivroById(req.params.id);
//   res.json(livros[livroIndex]);
// });

// app.post("/livros", (req, res) => {
//   livros.push(req.body);
//   res.status(201).send("Livro adicionado com sucesso!");
// });

// app.put("/livros/:id", (req, res) => {
//   let livroIndex = getLivroById(req.params.id);
//   livros[livroIndex].titulo = req.body.titulo;
//   res.json(livros);
// });

// app.delete("/livros/:id", (req, res) => {
//   let { id } = req.params;
//   let livroIndex = getLivroById(id);
//   livros.splice(livroIndex, 1);
//   res.send(`Livro com id ${id} deletado com sucesso!`);
// });

// function getLivroById(id) {
//   return livros.findIndex((livro) => livro.id == id);
// }

export default app;
