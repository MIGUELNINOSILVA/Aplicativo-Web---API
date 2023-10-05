import { Router } from "express";

const router = Router();
import { checkDuplicateUsernameOrEmail } from "../middlewares/verifySignUp.js";

import { signIn, signUp } from "../controllers/auth.controller.js";

router.post('/signup', checkDuplicateUsernameOrEmail, signUp);
router.post('/signin', signIn);

export default router;