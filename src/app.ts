import express from "express";
import routes from "./modules/circulation/routes";
import connectToDatabase from "./configs/db";

const app = express();

app.use(express.json());
app.use("/api/v1", routes);


(async () => await connectToDatabase())();

export default app;