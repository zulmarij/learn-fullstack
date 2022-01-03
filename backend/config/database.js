import { Sequelize } from "sequelize";

const db = new Sequelize("learn-fullstack", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
