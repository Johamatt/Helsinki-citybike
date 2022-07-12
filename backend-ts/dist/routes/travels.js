"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const travel_1 = require("../controller/travel");
const router = (0, express_1.Router)();
router.get("/", travel_1.getAllTravels);
router.get("/:id", travel_1.getTravelById);
exports.default = router;
