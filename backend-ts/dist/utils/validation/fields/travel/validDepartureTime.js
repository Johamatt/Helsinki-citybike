"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validDepartureTime = void 0;
const moment_1 = __importDefault(require("moment"));
const validDepartureTime = (DepartureTime) => {
    if ((0, moment_1.default)(DepartureTime, moment_1.default.defaultFormat, true).isValid()) {
        console.log((0, moment_1.default)(DepartureTime).isValid());
        console.log((0, moment_1.default)(DepartureTime));
        return true;
    }
    else {
        return false;
    }
};
exports.validDepartureTime = validDepartureTime;
