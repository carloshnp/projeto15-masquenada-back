import joi from "joi";

export const productSchema = joi.object({
  name: joi.string().required().min(10),
  description: joi.string().required().min(20),
  price: joi.number().required(),
  quantity: joi.number().required(),
  type: joi.string().required().valid("camisa", "chuteira", "bola"),
  shirtColor: joi.alternatives().conditional("type", {
    is: "camisa",
    then: joi.string().required(),
  }),
  shirtSize: joi.alternatives().conditional("type", {
    is: "camisa",
    then: joi.string().required().valid("PP", "P", "M", "G", "GG"),
  }),
  bootColor: joi.alternatives().conditional("type", {
    is: "chuteira",
    then: joi.string().required(),
  }),
  bootSize: joi.alternatives().conditional("type", {
    is: "chuteira",
    then: joi.number().required().valid(36, 37, 38, 39, 40, 41, 42, 43, 44),
  }),
  ballYear: joi
    .alternatives()
    .conditional("type", {
      is: "bola",
      then: joi.number().required(),
    }),
});
