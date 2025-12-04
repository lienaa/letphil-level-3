import React from 'react'
import { Student } from './Student'

export const StudentList = ({ students, deleteStudent, studentData}) => {
  return (
    <ul>
        {students.map((student) => {
            return <li key={student.id}><Student student={student} deleteStudent={deleteStudent} studentData={studentData}/></li>
        })}
    </ul>
  )
}