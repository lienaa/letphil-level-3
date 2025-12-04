import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { Student } from "./components/Student";
import { StudentList } from "./components/StudentList";

function App() {
  const [student, setStudent] = useState(null);
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    grade: "",
  });

  // Search with GET by ID
  const getStudentById = async (e) => {
    e.preventDefault();

    if (!studentId) {
      console.log("Please enter ID");
      return;
    }

    const url = `http://localhost:3000/student/${studentId}`;
    try {
      const { data } = await axios.get(url);
      console.log("received data: ", data);
      setStudent(data);
    } catch (e) {
      alert("Student not found");
    }
  };

  // Display all students
  const displayAllStudents = async () => {
    const url = "http://localhost:3000/students";
    try {
      const { data } = await axios.get(url);
      console.log("StudentList set: ", data);
      setStudents(data);
    } catch (e) {
      console.log("Unable to retrieve all students");
    }
  };

  // Add a student with POST
  const addStudent = async (e) => {
    const url = "http://localhost:3000/addStudent";
    console.log("Adding: ", formInput);
    try {
      const { data } = await axios.post(url, formInput);
    } catch (e) {
      console.log("Student was not added");
    }
  };

  // Form on change helper function
  const formChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  // Delete student
  const deleteStudent = async (id) => {
    const url = `http://localhost:3000/deleteStudent/${id}`;
    try {
      const { data } = await axios.delete(url);
      displayAllStudents();
    } catch (e) {
      console.log("Delete failed");
    }
  };

  // studentData brings the form from component to App
  const studentData = (e, id, age, grade) => {
    e.preventDefault();
    console.log(id, age, grade)
    return ({ id, age, grade })
  }

  useEffect(() => {
    displayAllStudents();
  }, [student]);

  return (
    <>
      <h1>Student Directory</h1>

      <br />
      <form onSubmit={getStudentById}>
        <input
          className="border border-white rounded"
          type="number"
          value={studentId}
          onChange={(e) => {
            setStudentId(e.target.value);
          }}
        />
        <button type="submit">Search ID</button>
      </form>
      <Student student={student} deleteStudent={deleteStudent} studentData={studentData} />

      <h2 className="mt-4 font-bold">Add Student</h2>
      <form onSubmit={addStudent} className="flex flex-col text-left">
        <label htmlFor="idInput">Student Name:</label>
        <input
          id="idInput"
          className="border border-white rounded"
          name="name"
          value={formInput.name}
          onChange={formChange}
          type="text"
        ></input>
        <label htmlFor="ageInput">Student Age:</label>
        <input
          id="ageInput"
          className="border border-white rounded"
          name="age"
          value={formInput.age}
          onChange={formChange}
          type="number"
        ></input>
        <label htmlFor="gradeInput">Student Grade %:</label>
        <input
          id="gradeInput"
          className="border border-white rounded"
          name="grade"
          value={formInput.grade}
          onChange={formChange}
          type="number"
        ></input>
        <button type="submit">Add</button>
      </form>

      <h2 className="mt-4 font-bold">All Students</h2>
      <StudentList students={students} deleteStudent={deleteStudent} studentData={studentData}/>
    </>
  );
}

export default App;
