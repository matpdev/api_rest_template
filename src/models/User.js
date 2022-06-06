import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

export default class User extends Model {
   static init(sequelize) {
      super.init(
         {
            nome: {
               type: Sequelize.STRING,
               defaultValue: "",
               validate: {
                  len: {
                     args: [3, 20],
                     msg: "Não pode ser vazio, deve ter entre 3 e 20 caracteres",
                  },
               },
            },
            email: {
               type: Sequelize.STRING,
               defaultValue: "",
               unique: {
                  msg: "Email já existe",
               },
               validate: {
                  isEmail: {
                     msg: "Email Inválido",
                  },
               },
            },
            password: {
               type: Sequelize.STRING,
               defaultValue: "",
            },
            password_hash: {
               type: Sequelize.VIRTUAL,
               defaultValue: "",
               validate: {
                  len: {
                     args: [6, 50],
                     msg: "Senha deve ter entre 6 a 50 caracteres",
                  },
               },
            },
         },
         {
            sequelize,
         }
      );
      this.addHook("beforeSave", async (user) => {
         if (user.password_hash)
            user.password = await bcrypt.hash(user.password_hash, 8);
      });
      return this;
   }
}
