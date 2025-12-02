import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send({ message: "This is the backend" })
});

app.get("/:id/category/:categoryId", (req, res) => {
    const { id, categoryId } = req.params;
    res.status(200).send({ message: `The id and category id are: [${id}, ${categoryId}]` })
    //res.status(200).send("<h1>This is HTML</h1>");

})

const userDB = [
    {id: 1, name: "Tony", age: 12},
    {id: 2, name: "Joe", age: 14},
    {id: 3, name: "Larry", age: 15},
]

// localhost:3000/newUser
// header: {
//  Content-Type: "application/jason"
// }
// body: {
//  id:4,
//  name: "Steve",
//  age: 18,
// }

app.post("/newUser", async (req, res) => {
    console.log(req.body);
    const { id, name, age } = req.body;
    await userDB.push({ id, name, age, });
    res.status(203).send(userDB);
});

app.listen(3000, () => console.log("Server is running on port: 3000"))