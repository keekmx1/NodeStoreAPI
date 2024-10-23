import express, { Router } from "express";
import * as authControler from "../controllers/authControler";

// Initialize Router
const router: Router = express.Router();

// Define Router
router.post("/register", authControler.register);
router.post("/login", authControler.login);

// Export Router
export default router;