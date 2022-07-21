"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validDistanceInMeters = void 0;
const validDistanceInMeters = (DistanceInMeters) => {
    if (Number.isInteger(DistanceInMeters) && DistanceInMeters >= 10) {
        return true;
    }
    else {
        false;
    }
};
exports.validDistanceInMeters = validDistanceInMeters;
