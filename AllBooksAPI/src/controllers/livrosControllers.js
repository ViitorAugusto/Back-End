import livros from "../model/Livro.js";

class LivrosController {
  static ListarLivros = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros);
    });
  };

  static ListarLivrosPorId = (req, res) => {
    const id = req.params.id;
    livros.findById(id, (err, livro) => {
      if (err) {
        res.status(400).send({message: `${err.message} -Id do livro não encontrado`});
      } else {
        res.status(200).send(livro);
      }
    });
  
  };

  static AdicionarLivro = (req, res) => {
    const livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res.status(500).json({ message: `${err.message} - ERROR ao cadastrar o livro.` });
      } else {
        res.status(201).json(livro);
      }
    });
  };

  static BuscarLivroPorId = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndUpdate(id, { $set: req.body }, (err) =>{
      if(!err){
        res.status(200).json({ message: "Livro atualizado com sucesso!" });
      } else {
        res.status(500).json({ message: `${err.message} - ERROR ao atualizar o livro.` });
      }
    });
    }

    static DeletarLivro = (req, res) => {
      const id = req.params.id;
      livros.findByIdAndDelete(id, (err) => {
        if(!err){
          res.status(200).send({ message: "Livro deletado com sucesso!" });
        } else {
          res.status(500).send({ message: `${err.message} - ERROR ao deletar o livro.` });
        }
      });
    };
}

export default LivrosController;
