import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const studentList = [
  {
    id: 1,
    name: "Jayce",
    age: 13,
    grade: "81",
  },
  {
    id: 2,
    name: "Dash",
    age: 12,
    grade: "95",
  },
  {
    id: 3,
    name: "Isaac",
    age: 11,
    grade: "88",
  },
];

let nextStudentId = studentList.length + 1;

// Hello
app.get("/hello", (req, res) => {
  console.log("Hello message sent");
  res.status(200).send({ message: "Hello, this is the backend." });
});

// Get student by ID
app.get("/student/:id", (req, res) => {
  console.log("Request data: ", req.params);
  const { id } = req.params;
  const [student] = studentList.filter((student) => student.id == id);
  console.log("Student: ", student.name);
  res.status(200).send(student);
});

// Get all students
app.get("/students", (req, res) => {
  console.log("Sending all students: ", studentList);
  res.status(200).send(studentList);
});

// POST new student
app.post("/addStudent", (req, res) => {
  const { name, age, grade } = req.body;
  console.log(
    "Adding Student: ",
    name,
    ", Age: ",
    age,
    ", Grade: ",
    grade,
    "%"
  );
  studentList.push({ id: nextStudentId++, name, age, grade });
  res.status(203).send(name);
});

// DELETE student from array
app.delete("/deleteStudent/:id", (req, res) => {
  const { id } = req.params;
  const index = studentList.findIndex((student) => student.id == id);
  if (index === -1) {
    res.status(404).send("Student ID not found");
  }
  const [student] = studentList.splice(index, 1);
  console.log("Removing Student: ", student.name);
  res.status(200).send(`User ${student.name} Deleted`);
});

// UPDATE student information
app.patch("/updateStudent/:id", (req, res) => {
    const { id } = req.params;
    const index = studentList.findIndex((student) => student.id == id);
    if (index === -1) {
        res.status(404).send("Student not found")
    }
    const student = studentList[index]
    const { name, age, grade } = req.body
    if (!name) student.name = name
    if (!age) student.age = age
    if (!grade) student.grade = grade
    res.status(200).send("Updated student ID: ", id)
});

app.listen(3000, () => console.log("Server Started at Port 3000"));
