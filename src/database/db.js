import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
    await mongoClient.connect();
    console.log("MongoDB conectado com sucesso!");
} catch (err) {
    console.log(err);
}

const db = mongoClient.db("Mas Que Nada!")
export const productsCollection = db.collection("products");