"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validReturnTime = void 0;
const moment_1 = __importDefault(require("moment"));
const validReturnTime = (ReturnTime) => {
    if ((0, moment_1.default)(ReturnTime, moment_1.default.defaultFormat, true).isValid()) {
        return true;
    }
    else {
        return false;
    }
};
exports.validReturnTime = validReturnTime;
