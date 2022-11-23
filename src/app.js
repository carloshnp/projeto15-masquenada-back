import express from "express";
import cors from "cors";
/* import productRouter from './routes/productsRoutes.js'; */
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.get("/health", (req, res) => res.send("OK"));
/* app.use(productRouter); */

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running at port: ${port}`);
});
