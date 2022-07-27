import { Router } from "express";
import {
  getAllStations,
  getStationById,
  uploadStationCSV,
} from "../controller/station";
import { upload } from "../utils/validation/multer.config";

const router = Router();
router.get("/", getAllStations);
router.get("/:id", getStationById);
router.post("/upload", upload.single("file"), uploadStationCSV);

export default router;
