import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import todoRoute from "./src/application/routes/todoRoutes"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo-app', );

app.use(express.json());
app.use('/todos', todoRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
