"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const station_1 = require("../controller/station");
const router = (0, express_1.Router)();
router.get("/", station_1.getAllStations);
router.get("/:id", station_1.getStationById);
exports.default = router;
