import Aluno from "../models/Aluno";

class HomeController {
   async index(req, res) {
      const novoAluno = await Aluno.create({
         nome: "Matheus",
         sobrenome: "Alves",
         email: "matheus2ep@gmail.com",
         idade: 19,
      });
      res.json(novoAluno);
   }
}

export default new HomeController();
