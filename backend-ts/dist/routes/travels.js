"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const travel_1 = require("../controller/travel");
const multer_config_1 = require("../utils/multer.config");
const router = (0, express_1.Router)();
router.get("/", travel_1.getAllTravels);
router.get("/:id", travel_1.getTravelById);
router.post("/upload", multer_config_1.upload.single("file"), travel_1.uploadTravelCSV);
exports.default = router;
