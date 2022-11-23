import { Router } from "express";
import { newProduct } from "../controllers/productsController.js";

const router = Router();

router.post("/add-products", newProduct);
router.get("/store");

export default router;
