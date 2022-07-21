"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStationCSV = exports.validTravelCsvRow = void 0;
const validDepartureStationId_1 = require("./fields/travel/validDepartureStationId");
const validDepartureStationName_1 = require("./fields/travel/validDepartureStationName");
const validDepartureTime_1 = require("./fields/travel/validDepartureTime");
const validDistanceInMeters_1 = require("./fields/travel/validDistanceInMeters");
const validDurationInSeconds_1 = require("./fields/travel/validDurationInSeconds");
const validReturnStationId_1 = require("./fields/travel/validReturnStationId");
const validReturnStationName_1 = require("./fields/travel/validReturnStationName");
const validReturnTime_1 = require("./fields/travel/validReturnTime");
const validTravelCsvRow = (row) => {
    if ((0, validDepartureStationId_1.validDepartureStationId)(row.departureStationId) &&
        (0, validDepartureStationName_1.validDepartureStationName)(row.departureStationName) &&
        (0, validDepartureTime_1.validDepartureTime)(row.departureTime) &&
        (0, validDistanceInMeters_1.validDistanceInMeters)(row.distanceInMeters) &&
        (0, validDurationInSeconds_1.validDurationInSeconds)(row.durationInSeconds) &&
        (0, validReturnStationId_1.validReturnStationId)(row.returnStationId) &&
        (0, validReturnStationName_1.validReturnStationName)(row.returnStationName) &&
        (0, validReturnTime_1.validReturnTime)(row.returnTime)) {
        return true;
    }
    return false;
};
exports.validTravelCsvRow = validTravelCsvRow;
const validateStationCSV = (row) => { };
exports.validateStationCSV = validateStationCSV;
