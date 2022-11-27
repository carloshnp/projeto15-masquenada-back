import joi from "joi";

export const productSchema = joi.object({
  name: joi.string().required().min(10),
  description: joi.string().required().min(20),
  image: joi.string().uri(),
  price: joi.number().required(),
  orders: joi.number().required(),
  inStock: joi.string().valid("in stock", "out of stock"),
  type: joi.string().valid("camisa", "chuteira", "bola").required(),
  shirtColor: joi.when("type", {
    is: "camisa",
    then: joi.string().required(),
  }),
  shirtSize: joi.when("type", {
    is: "camisa",
    then: joi.array().items(joi.string().valid("PP", "P", "M", "G", "GG").required()),
  }),
  bootColor: joi.when("type", {
    is: "chuteira",
    then: joi.string().required(),
  }),
  bootSize: joi.when("type", {
    is: "chuteira",
    then: joi.number().required().valid(36, 37, 38, 39, 40, 41, 42, 43, 44),
  }),
  ballYear: joi.when("type", {
    is: "bola",
    then: joi.number().required(),
  }),
});
