"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validStationCsvRow = exports.validTravelCsvRow = void 0;
const validAdress_1 = require("./fields/station/validAdress");
const validID_1 = require("./fields/station/validID");
const validKapasiteet_1 = require("./fields/station/validKapasiteet");
const validKaupunki_1 = require("./fields/station/validKaupunki");
const validName_1 = require("./fields/station/validName");
const validNamn_1 = require("./fields/station/validNamn");
const validNimi_1 = require("./fields/station/validNimi");
const validOperaattor_1 = require("./fields/station/validOperaattor");
const validOsoite_1 = require("./fields/station/validOsoite");
const validStad_1 = require("./fields/station/validStad");
const validX_1 = require("./fields/station/validX");
const validY_1 = require("./fields/station/validY");
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
const validStationCsvRow = (row) => {
    if ((0, validAdress_1.validAdress)(row.adress) &&
        (0, validID_1.validId)(row.id) &&
        (0, validKapasiteet_1.validKapasiteet)(row.kapasiteet) &&
        (0, validKaupunki_1.validKaupunki)(row.kaupunki) &&
        (0, validName_1.validName)(row.name) &&
        (0, validNamn_1.validNamn)(row.namn) &&
        (0, validNimi_1.validNimi)(row.nimi) &&
        (0, validOperaattor_1.validOperaattor)(row.operaattor) &&
        (0, validOsoite_1.validOsoite)(row.osoite) &&
        (0, validStad_1.validstad)(row.stad) &&
        (0, validX_1.validX)(row.x) &&
        (0, validY_1.validY)(row.y)) {
        return true;
    }
    else {
        return false;
    }
};
exports.validStationCsvRow = validStationCsvRow;
