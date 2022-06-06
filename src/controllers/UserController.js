import User from "../models/User";

class UserController {
   async index(req, res) {
      try {
         const allUsers = await User.findAll();
         return res.json(allUsers);
      } catch (error) {
         return res.json(null);
      }
   }

   async store(req, res) {
      try {
         const novoUser = await User.create(req.body);
         return res.json(novoUser);
      } catch (error) {
         return res.status(401).json({
            erros: error,
         });
      }
   }

   async show(req, res) {
      try {
         const { id } = req.params;
         const user = await User.findByPk(id);
         return res.json(user);
      } catch (error) {
         return res.json(null);
      }
   }

   async update(req, res) {
      try {
         const { id } = req.params;
         if (!id) {
            return res.status(400).json({
               errors: ["ID não enviado"],
            });
         }
         const user = await User.findByPk(id);
         if (!user) {
            return res.status(400).json({
               errors: ["Usuário não existe"],
            });
         }
         const updated = await user.update(req.body);
         return res.json(updated);
      } catch (error) {
         return res.json(null);
      }
   }

   async delete(req, res) {
      try {
         const { id } = req.params;
         if (!id) {
            return res.status(400).json({
               errors: ["ID não enviado"],
            });
         }
         const user = await User.findByPk(id);
         if (!user) {
            return res.status(400).json({
               errors: ["Usuário não existe"],
            });
         }
         await user.destroy();
         return res.json("Usuário apagado");
      } catch (error) {
         return res.json(null);
      }
   }
}

export default new UserController();
