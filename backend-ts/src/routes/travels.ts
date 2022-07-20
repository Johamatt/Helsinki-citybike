import { Router } from "express";
import {
  getAllTravels,
  getTravelById,
  uploadTravelCSV,
} from "../controller/travel";
import { upload } from "../utils/multer.config";

const router = Router();
router.get("/", getAllTravels);
router.get("/:id", getTravelById);
router.post("/upload", upload.single("file"), uploadTravelCSV);

export default router;
