"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Travel extends sequelize_1.Model {
    static initModel(sequelize) {
        Travel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            departureTime: {
                type: new sequelize_1.DataTypes.DATE(),
                allowNull: false,
            },
            returnTime: {
                type: new sequelize_1.DataTypes.DATE(),
                allowNull: false,
            },
            departureStationId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            departureStationName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            returnStationId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            returnStationName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            distanceInMeters: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            durationInSeconds: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: "travels",
        });
    }
}
exports.default = Travel;
