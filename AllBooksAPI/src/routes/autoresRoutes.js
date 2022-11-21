import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutorController.ListarAutores)
  .get("/autores/:id", AutorController.ListarAutorPorId)
  .post("/autores", AutorController.AdicionarAutor)
  .put("/autores/:id", AutorController.EditarAutorPorId)
  .delete("/autores/:id", AutorController.DeletarAutor);
export default router;
