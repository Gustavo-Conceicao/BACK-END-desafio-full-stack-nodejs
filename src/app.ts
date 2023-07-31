import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import userRouter from "./routes/users.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter);

app.use(handleErrors);

export default app;
