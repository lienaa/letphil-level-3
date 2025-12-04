import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "This is the backend" });
});

app.get("/:id/category/:categoryId", (req, res) => {
  const { id, categoryId } = req.params;
  res
    .status(200)
    .send({ message: `The id and category id are: [${id}, ${categoryId}]` });
  //res.status(200).send("<h1>This is HTML</h1>");
});

const userDB = [
  { id: 1, name: "Tony", occupation: "teacher", age: 12 },
  { id: 2, name: "Joe", occupation: "doctor", age: 14 },
  { id: 3, name: "Larry", occupation: "chiropractor", age: 15 },
  { id: 4, name: "Frank", occupation: "x-ray technician", age: 37 },
];

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
  const { id, name, occupation, age } = req.body;
  userDB.push({ id, name, occupation, age });
  res.status(203).send(userDB);
});

// change the user with id: 3 name => something else
// and the age different number
app.patch("/update/:userID", (req, res) => {
  const userID = req.params.userID;
  const { name, age } = req.body;
  let user = userDB.find((user) => user.id == userID);
  user = { ...user, name, age };
  const index = userDB.findIndex((user) => user.id == userID);
  userDB.splice(index, 1, user);
  console.log(userDB);
  res.status(200).send(`Updated User: ${userDB[index].id}, ${userDB[index].name}`);
});

app.listen(3000, () => console.log("Server is running on port: 3000"));
