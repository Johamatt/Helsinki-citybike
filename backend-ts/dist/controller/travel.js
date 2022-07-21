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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadTravelCSV = exports.getTravelById = exports.getAllTravels = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const csv_parse_1 = require("csv-parse");
const travel_1 = require("../models/travel");
const validateCsvRow_1 = require("../utils/validation/validateCsvRow");
const getAllTravels = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const allTravels = yield travel_1.Travels.findAndCountAll({
        limit: size,
        offset: (page * size),
    });
    return res.status(200).json({ data: allTravels });
});
exports.getAllTravels = getAllTravels;
const getTravelById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const travel = yield travel_1.Travels.findByPk(id);
    return res.status(200).json({ data: travel });
});
exports.getTravelById = getTravelById;
const uploadTravelCSV = (req, res, next) => {
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
    let travels = [];
    const read = fs
        .createReadStream(path.join(__dirname, "../utils/uploads", req.file.filename))
        .pipe(parser)
        .on("error", (error) => {
        console.error(error);
        throw error.message;
    })
        .on("data", (row) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(row);
        if ((0, validateCsvRow_1.validTravelCsvRow)(row)) {
            travels.push(row);
        }
        else {
            //... todo push invalid rows into file
        }
        if (travels.length >= 50000) {
            try {
                read.pause();
                yield travel_1.Travels.bulkCreate(travels);
                travels = [];
                read.resume();
            }
            catch (err) {
                console.log(err);
            }
        }
    }))
        .on("end", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield travel_1.Travels.bulkCreate(travels);
        }
        catch (err) {
            console.log(err);
        }
        return res.json(res.statusCode);
    }));
};
exports.uploadTravelCSV = uploadTravelCSV;
