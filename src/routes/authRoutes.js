import { Router } from 'express';
import { validateSignUp, validateSignIn } from '../models/authSchema.js';
import { signIn, signUp } from '../controllers/authController.js';

const router = Router();

router
  .post("/sign-up", validateSignUp, signUp)
  .post("/sign-in", validateSignIn, signIn);

export default router;