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
exports.getTravelById = exports.getAllTravels = void 0;
const travel_1 = require("../models/travel");
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
