import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/hello", (req, res) => {
  console.log("Hello message sent");
  res.status(200).send({ message: "Hello, this is the backend." });
});

app.listen(3000, () => console.log("Server Started at Port 3000"));
