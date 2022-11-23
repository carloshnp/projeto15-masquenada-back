import { Router } from 'express';
import { validateSignUp, validateSignIn } from '../models/authSchema.js';

const router = Router();

router
  .post("/sign-up", validateSignUp)
  .post("/sign-in", validateSignIn);

export default router;