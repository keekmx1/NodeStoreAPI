import express, { Router } from "express";
import * as productController from "../controllers/productController";

// Initialize Router
const router: Router = express.Router();

// Define Router
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getAllProducts);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

// Export Router
export default router;