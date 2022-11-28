import joi from "joi";

export const productCheckoutSchema = joi.object({
  name: joi.string().required().min(10),
  description: joi.string().required().min(20),
  image: joi.string().uri(),
  price: joi.number().required(),
  orders: joi.number().required(),
  inStock: joi.string().valid("in stock", "out of stock"),
  type: joi.string().valid("camisa", "chuteira", "bola").required(),
  shirtColor: joi.when("type", {
    is: "camisa",
    then: joi.string().valid('principal', 'reserva').required(),
  }),
  shirtSize: joi.when("type", {
    is: "camisa",
    then: joi.string().valid("PP", "P", "M", "G", "GG").required(),
  }),
  bootSize: joi.when("type", {
    is: "chuteira",
    then: joi.number().valid(36, 37, 38, 39, 40, 41, 42, 43, 44).required(),
  }),
  ballYear: joi.when("type", {
    is: "bola",
    then: joi.number().valid(2022, 2018, 2014, 2010, 2006, 2002, 1998, 1994).required(),
  }),
});
