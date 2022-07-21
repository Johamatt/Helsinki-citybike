"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validDurationInSeconds = void 0;
const validDurationInSeconds = (DurationInSeconds) => {
    if (Number.isInteger(DurationInSeconds) && DurationInSeconds >= 10) {
        return true;
    }
    else {
        false;
    }
};
exports.validDurationInSeconds = validDurationInSeconds;
