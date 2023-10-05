import { Router } from "express";
import { verifyToken } from "../middlewares/index.js";
import { verifyTokenUser } from "../controllers/user.controller.js";


const router = Router();

router.get('/user-data', verifyToken ,verifyTokenUser);

export default router;