import { Sequelize } from "sequelize-typescript";
import { Stations } from "../models/stations";
import { Travels } from "../models/travel";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "root",
  database: "helsinki-bike",
  logging: false,
  models: [Travels, Stations],
});

export default connection;
