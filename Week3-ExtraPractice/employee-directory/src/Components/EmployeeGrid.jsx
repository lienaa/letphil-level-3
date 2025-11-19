import React from "react";
import { Employee } from "./Employee";

export const EmployeeGrid = ({ employees }) => {
  return (
    <div className="my-8 flex flex-col gap-8">
      {employees.map((employee, index) => {
        return <Employee key={employee.name + index} employee={employee} />;
      })}
    </div>
  );
};
