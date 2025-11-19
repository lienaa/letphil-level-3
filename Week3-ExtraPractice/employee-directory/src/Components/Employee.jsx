import { React, useState } from "react";

export const Employee = ({ employee }) => {
  const [showBio, setShowBio] = useState(false);
  {console.log(employee)}
  return (
    <div>
      
      <img src={employee.imageUrl} alt={employee.name} />
      <p>Name: {employee.name}</p>
      <p>Position: {employee.position}</p>
      <p>Years at Company: {employee.years}</p>
      <p>Bio: {employee.bio}</p>
    </div>
  );
};
