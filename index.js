import express from "express";
import todoRoutes from "./Routes/todoRoutes.js";
import cors from "cors";
import connectDb from "./config/db.js"
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDb();


app.use('/api/todos', todoRoutes);


 app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });