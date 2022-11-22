import express from "express";
import LivrosController from "../controllers/livrosControllers.js";

const router = express.Router();

router
  .get("/livros", LivrosController.ListarLivros)
  .get("/livros/busca", LivrosController.ListarLivrosPorEditora)
  .get("/livros/:id", LivrosController.ListarLivrosPorId)
  .post("/livros", LivrosController.AdicionarLivro)
  .put("/livros/:id", LivrosController.EditarLivroPorId)
  .delete("/livros/:id", LivrosController.DeletarLivro);
export default router;
