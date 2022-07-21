"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStationCSV = exports.validTravelCsvRow = void 0;
const validDepartureStationId_1 = require("./fields/travel/validDepartureStationId");
const validDepartureStationName_1 = require("./fields/travel/validDepartureStationName");
const validDepartureTime_1 = require("./fields/travel/validDepartureTime");
const validTravelCsvRow = (row) => {
    if ((0, validDepartureStationId_1.validDepartureStationId)(row.departureStationId) &&
        (0, validDepartureStationName_1.validDepartureStationName)(row.departureStationName) &&
        (0, validDepartureTime_1.validDepartureTime)(row.departureTime)) {
        return true;
    }
    return false;
};
exports.validTravelCsvRow = validTravelCsvRow;
const validateStationCSV = (row) => { };
exports.validateStationCSV = validateStationCSV;
