import { Router } from "express";
import {
  getStationsPagination,
  getStationById,
  uploadStationCSV,
  getStationsPaginationFilter,
} from "../controller/station";
import { upload } from "../utils/validation/multer.config";

const router = Router();
router.get("/paginationfiltering", getStationsPaginationFilter);
router.get("/pagination", getStationsPagination);
router.get("/:id", getStationById);
router.post("/upload", upload.single("file"), uploadStationCSV);

export default router;
