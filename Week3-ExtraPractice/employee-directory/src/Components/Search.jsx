import { React, useState } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="justify-center my-4 flex gap-2">
      <p className="p-2">Search:</p>
      <input
        className="border p-2"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
};
