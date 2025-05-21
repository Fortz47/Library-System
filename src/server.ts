import app from "./app";


const link = "http://localhost:3000/api/v1/circulation";
app.listen(3000, () => {
    console.log(`Server is running on port 3000\n${link}`);
});
