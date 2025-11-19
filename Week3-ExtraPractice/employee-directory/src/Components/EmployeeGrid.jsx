import React from "react";
import { Employee } from "./Employee";

export const EmployeeGrid = ({ employees }) => {
  console.log(employees);
  return (
    <div>
      {employees.map((employee) => {
        return <>
          <Employee employee={employee} />
        </>;
      })}
    </div>
  );
};
