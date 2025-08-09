import express from "express";
import { handleHealthQuery } from "../controllers/aiHealthAssistant.controller.js";

const router = express.Router();

router.post("/health-assistant", handleHealthQuery);

export default router;
