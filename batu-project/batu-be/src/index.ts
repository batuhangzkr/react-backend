import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { authRouter } from "./routes";

configDotenv();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
