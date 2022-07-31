import { Router } from "express";
import {
  getStationsPaginated,
  getStationById,
  uploadStationCSV,
} from "../controller/station";
import { upload } from "../utils/validation/multer.config";

const router = Router();
router.get("/pagination", getStationsPaginated);
router.get("/:id", getStationById);
router.post("/upload", upload.single("file"), uploadStationCSV);

router.get("/");

export default router;
