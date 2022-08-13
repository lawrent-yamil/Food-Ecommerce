import express, { Application } from "express";
import cors from "cors";
import { PORT } from "./config";

const app: Application = express();

// middlewares
app.use(express.json());
app.use(cors());

// config
app.set("port", PORT);

app.listen(PORT, () => {
  console.log("Server is running on port", app.get("port"));
});
