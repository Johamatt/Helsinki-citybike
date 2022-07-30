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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const trips_1 = __importDefault(require("./routes/trips"));
const stations_1 = __importDefault(require("./routes/stations"));
const models_1 = require("./models");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, express_1.json)());
app.use((0, express_1.urlencoded)({ extended: true }));
app.use("/trips", trips_1.default);
app.use("/stations", stations_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
models_1.db.sequelize.sync().then(() => {
    try {
        models_1.db.sequelize.authenticate();
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
app.listen(PORT);
module.exports = app;
exports.default = app;
