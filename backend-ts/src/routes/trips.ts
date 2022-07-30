import { Router } from "express";
import {
  getAllTrips,
  getTripById,
  uploadTripCSV,
} from "../controller/trip";
import { upload } from "../utils/validation/multer.config";

const router = Router();
router.get("/", getAllTrips);
router.get("/:id", getTripById);
router.post("/upload", upload.single("file"), uploadTripCSV);

export default router;
