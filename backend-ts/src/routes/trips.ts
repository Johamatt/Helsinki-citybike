import { Router } from "express";
import {
  getTripsPaginated,
  getTripById,
  uploadTripCSV,
} from "../controller/trip";
import { upload } from "../utils/validation/multer.config";

const router = Router();
router.get("/pagination", getTripsPaginated);
router.get("/:id", getTripById);
router.post("/upload", upload.single("file"), uploadTripCSV);

router.get("/paginatedfilter");

export default router;
