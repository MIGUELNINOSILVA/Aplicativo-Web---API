import { Router } from "express";
import { verifyToken } from "../middlewares/index.js";
import { editUser, findUserByEmailAndUpdate, verifyTokenUser } from "../controllers/user.controller.js";


const router = Router();

router.get('/user-data', verifyToken ,verifyTokenUser);
router.post('/edit-user/:_id', verifyToken, editUser);
router.patch('/edit-user/find-and-update-user', verifyToken, findUserByEmailAndUpdate);

export default router;