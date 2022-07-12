"use strict";
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
exports.getStationById = exports.getAllStations = void 0;
const stations_1 = require("../models/stations");
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
