"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const stations_1 = require("../models/stations");
const travel_1 = require("../models/travel");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "root",
    database: "helsinki-bike",
    logging: false,
    models: [travel_1.Travels, stations_1.Stations],
});
exports.default = connection;
