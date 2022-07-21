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
exports.uploadStationCSV = exports.getStationById = exports.getAllStations = void 0;
const stations_1 = require("../models/stations");
const csv_parse_1 = require("csv-parse");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const getAllStations = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const allStations = yield stations_1.Stations.findAndCountAll({
        limit: size,
        offset: (page * size),
    });
    return res.status(200).json({ data: allStations });
});
exports.getAllStations = getAllStations;
const getStationById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const station = yield stations_1.Stations.findByPk(id);
    return res.status(200).json({ data: station });
});
exports.getStationById = getStationById;
const uploadStationCSV = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const parser = (0, csv_parse_1.parse)({
        delimiter: ",",
        encoding: "utf8",
        from_line: 2,
        columns: [
            "FID",
            "ID",
            "Nimi",
            "Namn",
            "Name",
            "Osoite",
            "Adress",
            "Kaupunki",
            "Stad",
            "Operaattor",
            "Kapasiteet",
            "x",
            "y",
        ],
    });
    const stations = [];
    fs.createReadStream(path.join(__dirname, "../utils/uploads", req.file.filename))
        .pipe(parser)
        .on("error", (error) => {
        console.error(error);
        throw error.message;
    })
        .on("data", (row) => {
        delete row.FID;
        console.log(row);
        stations.push(row);
    })
        .on("end", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield stations_1.Stations.bulkCreate(stations);
        }
        catch (err) {
            console.log(err);
        }
        fs.close;
        return res.json(res.status);
    }));
});
exports.uploadStationCSV = uploadStationCSV;
