import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
    await mongoClient.connect();
    console.log("MongoDB conectado com sucesso!");
} catch (err) {
    console.log(err);
}

const db = mongoClient.db("masquenada");

export const usersCollection = db.collection("users");
export const sessionCollection = db.collection("session");
export const productsCollection = db.collection("products");