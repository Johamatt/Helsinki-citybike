"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Station extends sequelize_1.Model {
    static initModel(sequelize) {
        Station.init({
            FID: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            nimi: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            namn: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            osoite: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            adress: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            kaupunki: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            stad: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            operaattor: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            kapasiteet: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            x: {
                type: sequelize_1.DataTypes.FLOAT(12, 6),
                allowNull: false,
            },
            y: {
                type: sequelize_1.DataTypes.FLOAT(12, 6),
                allowNull: false,
            },
        }, {
            tableName: "stations",
            sequelize, // passing the `sequelize` instance is required
        });
    }
}
exports.default = Station;
