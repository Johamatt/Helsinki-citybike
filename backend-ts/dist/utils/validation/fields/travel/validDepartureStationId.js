"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validDepartureStationId = void 0;
const validDepartureStationId = (DepartureStationId) => {
    if (Number.isInteger(DepartureStationId) && DepartureStationId > 0) {
        return true;
    }
    else {
        false;
    }
};
exports.validDepartureStationId = validDepartureStationId;
