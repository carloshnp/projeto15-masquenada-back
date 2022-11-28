import joi from 'joi';

const signUpSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(), 
  confirmPassword: joi.ref("password")
});

const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});

async function validateSignUp(req, res, next) {
  const { name, email, password, confirmPassword } = req.body;

  const validation = signUpSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const error = validation.error.details.map(detail => detail.message);
    return res.status(422).send(error);
  }

  if (password !== confirmPassword) {
    return res.status(422).send("Passwords don't match!");
  }

  res.locals.user = { name, email, password };

  next();
}

async function validateSignIn(req, res, next) {
  const { email, password } = req.body;

  const validation = signInSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const error = validation.error.details.map(detail => detail.message);
    return res.status(422).send(error);
  }

  res.locals.user = { email, password };

  next();
}

export { validateSignUp, validateSignIn };