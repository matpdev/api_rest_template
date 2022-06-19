import Token from "../models/User";

class TokenController {
   async store(req, res) {
      const novoAluno = await User.findAll();
      res.json(novoAluno);
   }
}

export default new HomeController();
