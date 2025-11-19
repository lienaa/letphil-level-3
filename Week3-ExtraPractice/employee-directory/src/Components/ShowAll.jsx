import React from "react";
import { useState } from "react";

export const ShowAll = ({ employees }) => {
  const [showAllActive, setShowAllActive] = useState(false);
  const showAll = () => {
    return
  };
  return (
    <button onClick={showAll}>{showAllActive ? "Hide All" : "Show All"}</button>
  );
};
