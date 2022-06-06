import User from "../models/User";

class HomeController {
   async store(req, res) {
      const novoAluno = await User.findAll();
      res.json(novoAluno);
   }
}

export default new HomeController();
