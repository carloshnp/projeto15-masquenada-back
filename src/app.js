import express from "express";
import cors from "cors";
import productRouter from './routes/productsRoutes.js'

const app = express();
app.use(express.json());
app.use(cors());
app.use(productRouter)

app.listen(5000, () => {
  console.log("App running at port: 5000");
});
