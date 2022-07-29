"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
require("dotenv/config");
const stations_1 = require("../models/stations");
const travel_1 = require("../models/travel");
const connection = new sequelize_typescript_1.Sequelize({
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres",
    models: [travel_1.Travels, stations_1.Stations],
});
exports.default = connection;
