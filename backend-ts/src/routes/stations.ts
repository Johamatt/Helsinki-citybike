import { Router } from "express";
import { getAllStations, getStationById } from "../controller/station";

const router = Router();
router.get("/", getAllStations);
router.get("/:id", getStationById);

export default router;
