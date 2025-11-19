import { React, useState } from "react";

export const Employee = ({ employee }) => {
  const [showBio, setShowBio] = useState(false);
  return (
    <div className="flex gap-4" >
      <div>
        <img
          className="w-[200px]"
          src={employee.imageUrl}
          alt={employee.name}
        />
      </div>
      <div className="flex flex-col gap-2 text-left w-sm">
        <p>
          <span className="font-bold">Name:</span> {employee.name}
        </p>
        <p>
          <span className="font-bold">Position:</span> {employee.position}
        </p>
        <p>
          <span className="font-bold">Years at Company:</span> {employee.years}
        </p>
        <p>
          <span className="font-bold">
            <button
              onClick={() => {
                setShowBio(!showBio);
              }}
            >
              Bio:
            </button>
          </span>{" "}
          <span className={showBio ? "block" : "hidden"}>{employee.bio}</span>
        </p>
      </div>
    </div>
  );
};
