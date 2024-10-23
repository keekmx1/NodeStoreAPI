import express, { Router } from "express";
import * as productController from "../controllers/productController";

// Initialize Router
const router: Router = express.Router();

// Define Router
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getAllProducts);
router.post("/create", productController.createProduct);
router.put("/update/:id", productController.updateProduct);
router.delete("/delete/:id", productController.deleteProduct);

// Export Router
export default router;