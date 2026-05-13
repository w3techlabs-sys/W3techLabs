import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

import authRoutes from "./authRoutes.js";
import serviceRoutes from "./serviceRoutes.js";
import quoteRoutes from "./quoteRoutes.js";
import contactRoutes from "./contactRoutes.js";

router.use("/auth", authRoutes);
router.use("/services", serviceRoutes);
router.use("/quotes", quoteRoutes);
router.use("/contact", contactRoutes);

app.use("/api/admin", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
