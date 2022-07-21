"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validReturnStationName = void 0;
const validReturnStationName = (ReturnStationName) => {
    if (ReturnStationName.length < 200) {
        return true;
    }
    else {
        return false;
    }
};
exports.validReturnStationName = validReturnStationName;
