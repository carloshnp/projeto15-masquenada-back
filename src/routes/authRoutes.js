import { Router } from 'express';
import { validateSignUp, validateSignIn } from '../models/authSchema.js';
import { signUp } from '../controllers/authController.js';

const router = Router();

router
  .post("/sign-up", validateSignUp, signUp)
  .post("/sign-in", validateSignIn);

export default router;