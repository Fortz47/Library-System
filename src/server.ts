import express from "express";
import routes from "./modules/circulation/routes/index";

const app = express();

app.use(express.json());
app.use("/api/v1", routes);

const link = "http://localhost:3000/api/v1/circulation";
app.listen(3000, () => {
    console.log(`Server is running on port 3000\n${link}`);
});
