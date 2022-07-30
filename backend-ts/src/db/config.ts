import { Sequelize } from "sequelize";
import "dotenv/config";

const connection = new Sequelize({
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  dialect: "postgres",
});

export default connection;
