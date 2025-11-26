import express from "express";
import { login, logout } from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema } from "../schemas/auth.schema.js";
import { upload } from "../middlewares/upload.middleware.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login", upload.none(), validateSchema(loginSchema), login);
router.post("/logout", upload.none(), verifyToken, logout);


export default router;