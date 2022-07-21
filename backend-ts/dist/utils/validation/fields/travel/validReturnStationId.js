"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validReturnStationId = void 0;
const validReturnStationId = (value) => {
    if (Number.isInteger(value) && value > 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.validReturnStationId = validReturnStationId;
