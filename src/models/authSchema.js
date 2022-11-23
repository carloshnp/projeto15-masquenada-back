import joi from 'joi';

const signUpSchema = joi.object({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required().min(8),
});

async function validateSignUp(req, res, next) {
  const { firstname, lastname, email, password } = req.body;

  const validation = signUpSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const error = validation.error.details.map(detail => detail.message);
    return res.status(422).send(error);
  }

  res.locals.user = { firstname, lastname, email, password };

  next();
}

export { validateSignUp };