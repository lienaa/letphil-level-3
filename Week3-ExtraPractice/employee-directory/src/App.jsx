import { useState } from "react";

import "./App.css";
import { EmployeeGrid } from "./Components/EmployeeGrid";
import { Search } from "./Components/Search";
import { ShowAll } from "./Components/ShowAll";

function App() {
  const employees = [
    {
      name: "Alice Johnson",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Software Engineer",
      years: 4,
      bio: "Full-stack developer focusing on React and Node. Loves clean code and good coffee.",
    },
    {
      name: "Mark Chen",
      imageUrl:
        "https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Project Manager",
      years: 7,
      bio: "Coordinates cross-team projects and keeps engineers on schedule without losing his mind.",
    },
    {
      name: "Sofia Ramirez",
      imageUrl:
        "https://images.unsplash.com/photo-1609440082513-44939695dcc7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "UX Designer",
      years: 3,
      bio: "Passionate about user-first design, prototyping, and reducing friction in digital products.",
    },
    {
      name: "Daniel Nguyen",
      imageUrl:
        "https://images.unsplash.com/photo-1642731065790-8ac3f70b1fba?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Data Analyst",
      years: 5,
      bio: "Turns messy datasets into actionable insights. Excel wizard. Python enthusiast.",
    },
    {
      name: "Emily Park",
      imageUrl:
        "https://images.unsplash.com/photo-1619018835000-f326c26196b3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "HR Specialist",
      years: 2,
      bio: "Handles onboarding, company culture, and tries to keep everyone sane and happy.",
    },
    {
      name: "Jason Lee",
      imageUrl:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "DevOps Engineer",
      years: 6,
      bio: "Automates deployments, builds pipelines, and ensures uptime. Lives inside AWS.",
    },
  ];

  const [filteredEmployees, setFilterEmployees] = useState(employees);
  return (
    <>
      <div className="flex flex-col justify-start">
        <h1>Employee Directory</h1>
        <Search employees={employees} onFilter={setFilterEmployees} />
        <ShowAll employees={filteredEmployees} />
        <EmployeeGrid employees={filteredEmployees} />
      </div>
    </>
  );
}

export default App;
