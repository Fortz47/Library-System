import express from "express";
import routes from "./modules/circulation/routes/index";

const app = express();

app.use(express.json());
app.use("/api/v1", routes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
