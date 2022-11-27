import { Router } from "express";
import { newProduct, getProducts } from "../controllers/productsController.js";

const router = Router();

router.post("/add-products", newProduct);
router.get("/store", getProducts);

export default router;
