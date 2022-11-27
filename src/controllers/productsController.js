import { productsCollection } from "../database/db.js";
import { productSchema } from "../models/productSchema.js";

export async function newProduct(req, res) {
  const product = req.body;

  try {
    const validateProduct = await productSchema.validateAsync(product);

    await productsCollection.insertOne(product);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getProducts(req, res) {
  try {
    const products = await productsCollection.find().toArray();
    res.send(products);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
