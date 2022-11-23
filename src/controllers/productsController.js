import { productsCollection } from "../database/db.js";

export async function newProduct(req, res) {
  const {
    name,
    description,
    price,
    quantity,
    type,
    shirtColor,
    shirtSize,
    bootColor,
    bootSize,
    ballYear,
  } = req.body;

  try {
    if (type === "camisa") {
      await productsCollection.insertOne({
        name,
        description,
        price,
        quantity,
        type,
        shirtColor,
        shirtSize,
      });
      res.sendStatus(201);
    } else if (type === "chuteira") {
      await productsCollection.insertOne({
        name,
        description,
        price,
        quantity,
        type,
        bootColor,
        bootSize,
      });
      res.sendStatus(201);
    } else if (type === "bola") {
      await productsCollection.insertOne({
        name,
        description,
        price,
        quantity,
        type,
        ballYear,
      });
      res.sendStatus(201);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
