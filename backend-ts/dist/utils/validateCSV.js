"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTravelCSV = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const moment_1 = __importDefault(require("moment"));
const csv_parse_1 = require("csv-parse");
const assert_1 = __importDefault(require("assert"));
const validateTravelCSV = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const dateformat = (0, moment_1.default)().format();
    const parser = (0, csv_parse_1.parse)({
        delimiter: ",",
        cast_date: true,
        cast: true,
        encoding: "utf8",
        from_line: 2,
        columns: [
            "departureTime",
            "returnTime",
            "departureStationId",
            "departureStationName",
            "returnStationId",
            "returnStationName",
            "distanceInMeters",
            "durationInSeconds",
        ],
    });
    const rowNumber = 1;
    const read = fs
        .createReadStream(path.join(__dirname, "/uploads", req.file.filename))
        .pipe(parser)
        .on("error", (error) => {
        console.error(error);
        throw error.message;
    })
        .on("data", (row) => {
        (0, assert_1.default)((0, moment_1.default)(row.departureTime).isValid(), new Error("invalid departureTime - at row: " + rowNumber));
        (0, assert_1.default)((0, moment_1.default)(row.returnTime).isValid(), new Error("invalid returnTime - at row: " + rowNumber));
        (0, assert_1.default)(!isNaN(row.departureStationId), new Error("invalid departureStationId - at row: " + rowNumber));
        (0, assert_1.default)(row.departureStationName !== undefined, new Error("invalid departureStationName - at row: " + rowNumber));
        (0, assert_1.default)(!isNaN(row.returnStationId), new Error("invalid returnStationId - at row: " + rowNumber));
        (0, assert_1.default)(row.returnStationName !== undefined, new Error("invalid returnStationName - at row: " + rowNumber));
        (0, assert_1.default)(!isNaN(row.distanceInMeters), new Error("invalid distanceInMeters - at row: " + rowNumber));
        (0, assert_1.default)(!isNaN(row.durationInSeconds), new Error("invalid durationInSeconds - at row: " + rowNumber));
        row++;
    })
        .on("end", () => __awaiter(void 0, void 0, void 0, function* () {
        return res.json(res.statusCode);
    }));
});
exports.validateTravelCSV = validateTravelCSV;
