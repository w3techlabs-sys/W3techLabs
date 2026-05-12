import express from "express";
import { createContactMessage } from "../controllers/contactController.js";

const router = express.Router();

/* POST CONTACT */
router.post("/", createContactMessage);

export default router;