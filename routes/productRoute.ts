import express, { Router } from "express";
import * as productController from "../controllers/productController";

// Initialize Router
const router: Router = express.Router();

// Define Router
router.get("/", productController.getAllProducts);
router.get("/id", productController.getAllProducts);

// Export Router
export default router;