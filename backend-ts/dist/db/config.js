"use strict";
// import { Sequelize } from "sequelize";
// import "dotenv/config";
Object.defineProperty(exports, "__esModule", { value: true });
// const connection = new Sequelize({
//   username: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   database: process.env.PGDATABASE,
//   host: process.env.PGHOST,
//   dialect: "postgres",
// });
// export default connection;
const sequelize_1 = require("sequelize");
require("dotenv/config");
const connection = new sequelize_1.Sequelize({
    username: "postgres",
    password: "root",
    database: "helsinki-bike",
    host: "localhost",
    dialect: "postgres",
});
exports.default = connection;
