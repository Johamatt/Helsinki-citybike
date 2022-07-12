import { Router } from "express";

import { getAllTravels, getTravelById } from "../controller/travel";

const router = Router();

router.get("/", getAllTravels);

router.get("/:id", getTravelById);

export default router;
