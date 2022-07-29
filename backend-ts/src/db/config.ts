import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
import { Stations } from "../models/stations";
import { Travels } from "../models/travel";

const connection = new Sequelize({
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  dialect: "postgres",
  models: [Travels, Stations],
});

export default connection;
