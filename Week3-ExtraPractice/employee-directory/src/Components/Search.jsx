import { React, useState } from "react";

export const Search = ({ employees, onFilter }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="justify-center my-4 flex gap-2">
      <p className="p-2">Search:</p>
      <input
        className="border p-2"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          const typedInput = e.target.value;
          setSearch(typedInput);
          const results = employees.filter((employee) =>
            employee.name.toLowerCase().includes(typedInput.toLowerCase())
          );
          onFilter(results);
        }}
      ></input>
    </div>
  );
};
