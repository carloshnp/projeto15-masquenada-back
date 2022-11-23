import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
    await mongoClient.connect();
    console.log("MongoDB conectado com sucesso!");
} catch (err) {
    console.log(err);
}

const db = mongoClient.db("MasQueNada!");

export const productsCollection = db.collection("products");
export const usersCollection = db.collection("users");