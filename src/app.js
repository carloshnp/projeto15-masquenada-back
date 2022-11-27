import express from "express";
import cors from "cors";
import productRouter from './routes/productsRoutes.js';
import authRoutes from "../src/routes/authRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.get("/health", (req, res) => res.send("OK"));
app.use(productRouter);
app.use(authRoutes);

app.listen(port, () => {
  console.log(`App is running in port: ${port}`);
});