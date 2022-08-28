require("dotenv").config();

module.exports = {
  dialect: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_NAME,
  database: process.env.DATABASE_DB,
  password: process.env.DATABASE_PASSWD,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  dialectOption: {
    timezone: "America/Sao_Paulo",
  },
  timezone: "America/Sao_Paulo",
};
