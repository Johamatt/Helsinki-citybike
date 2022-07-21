"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validDepartureStationName = void 0;
const validDepartureStationName = (DepartureStationName) => {
    if (typeof DepartureStationName === "string") {
        if (DepartureStationName.length < 200) {
            return true;
        }
        else {
            return false;
        }
    }
};
exports.validDepartureStationName = validDepartureStationName;
