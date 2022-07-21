"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validDepartureStationName = void 0;
const validDepartureStationName = (DepartureStationName) => {
    if (DepartureStationName.length > 2 || DepartureStationName.length < 200) {
        return true;
    }
    else {
        return false;
    }
};
exports.validDepartureStationName = validDepartureStationName;
