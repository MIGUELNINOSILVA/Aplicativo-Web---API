import { Router } from "express";
import { verifyToken } from "../middlewares/index.js";
import { createUser } from "../controllers/user.controller.js";


const router = Router();

router.post('/');

export default router;