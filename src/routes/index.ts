import express from "express";
import healthRoutes from "./health.routes";
import userRoutes from "./user.routes";

const router = express.Router();

//import routes
router.use("/health", healthRoutes);
router.use("/users", userRoutes);

export default router;
