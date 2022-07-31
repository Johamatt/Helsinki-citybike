import { Router } from "express";
import {
  getPaginationFilter,
  getTripsPagination,
  getTripById,
  uploadTripCSV,
} from "../controller/trip";
import { upload } from "../utils/validation/multer.config";

const router = Router();
router.get("/paginationfiltering", getPaginationFilter);
router.get("/pagination", getTripsPagination);
router.get("/:id", getTripById);
router.post("/upload", upload.single("file"), uploadTripCSV);

export default router;
