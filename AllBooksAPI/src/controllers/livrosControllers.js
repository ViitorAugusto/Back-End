import livros from "../models/livros.js";

class LivrosController {
  static ListarLivros = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros);
    });
  };
}

export default LivrosController;
