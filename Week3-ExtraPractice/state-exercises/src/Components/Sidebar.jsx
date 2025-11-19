import React, { useState } from "react";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <button onClick={toggleSideBar}>Sidebar</button>
      <nav className={`${sidebarOpen ? "block" : "hidden"} flex flex-col border`}>
        <a href="#">Home</a>
        <a href="#">Dash</a>
        <a href="#">Settings</a>
      </nav>
    </div>
  );
};
