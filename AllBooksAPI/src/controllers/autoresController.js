import autores from "../model/Autor.js";

class AutorController {
  static ListarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  };

  static ListarAutorPorId = (req, res) => {
    const id = req.params.id;
    autores.findById(id, (err, autores) => {
      if (err) {
        res.status(400).send({message: `${err.message} -Id do autores não encontrado`});
      } else {
        res.status(200).send(autores);
      }
    });
  
  };

  static AdicionarAutor = (req, res) => {
    const autor = new autores(req.body);
    autor.save((err) => {
      if (err) {
        res.status(500).json({ message: `${err.message} - ERROR ao cadastrar o Autor.` });
      } else {
        res.status(201).json(autor);
      }
    });
  };

  static EditarAutorPorId = (req, res) => {
    const id = req.params.id;
    autores.findByIdAndUpdate(id, { $set: req.body }, (err) =>{
      if(!err){
        res.status(200).json({ message: "Autor atualizado com sucesso!" });
      } else {
        res.status(500).json({ message: `${err.message} - ERROR ao atualizar o Autor.` });
      }
    });
    }

    static DeletarAutor = (req, res) => {
      const id = req.params.id;
      autores.findByIdAndDelete(id, (err) => {
        if(!err){
          res.status(200).send({ message: "autores deletado com sucesso!" });
        } else {
          res.status(500).send({ message: `${err.message} - ERROR ao deletar o Autor.` });
        }
      });
    };
}

export default AutorController;
