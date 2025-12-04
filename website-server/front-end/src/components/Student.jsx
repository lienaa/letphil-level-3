import React from "react";
import { useState } from "react";

export const Student = ({ student, deleteStudent, studentData }) => {
  const [editMode, setEditMode] = useState(false);
  const [formEdit, setFormEdit] = useState({
    name: "",
    age: "",
    grade: "",
  });

  const formInput = (e) => {
    setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
  };

  if (student) {
    if (!editMode) {
      return (
        <>
          <div className="mx-auto p-2 border flex gap-6">
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}%</p>
            <button onClick={() => deleteStudent(student.id)}>❌ Delete</button>
            <button
              onClick={() => {
                setEditMode(!editMode);
              }}
            >
              📝 Edit
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="mx-auto p-2 border flex flex-row gap-6">
            <form onSubmit={(e) => studentData(e, formEdit.name, formEdit.age, formEdit.grade)}>
              <p>ID: {student.id}</p>
              <div>
                <label htmlFor="editName">Name: </label>
                <input
                  className="border border-white rounded"
                  id="editName"
                  type="text"
                  name="name"
                  value={formEdit.name}
                  onChange={formInput}
                  placeholder={student.name}
                />
                <label htmlFor="editAge">Age: </label>
                <input
                  className="border border-white rounded"
                  id="editAge"
                  type="number"
                  name="age"
                  value={formEdit.age}
                  onChange={formInput}
                  placeholder={student.age}
                />
                <label htmlFor="editGrade">Grade: </label>
                <input
                  className="border border-white rounded"
                  id="editGrade"
                  type="number"
                  name="grade"
                  value={formEdit.grade}
                  onChange={formInput}
                  placeholder={student.grade}
                />
              </div>
            </form>
            <button onClick={() => deleteStudent(student.id)}>❌ Delete</button>
            <button
              onClick={() => {
                setEditMode(!editMode);
              }}
            >
              💾 Save
            </button>
          </div>
        </>
      );
    }
  } else {
    return null;
  }
};
