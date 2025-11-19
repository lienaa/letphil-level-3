import { useState } from "react";
import "./App.css";

import { Counter } from "./Components/Counter";
import { Switch } from "./Components/Switch";
import { ParagraphToggle } from "./Components/ParagraphToggle";
import { Input } from "./Components/Input";
import { Password } from "./Components/Password";
import { Sidebar } from "./Components/Sidebar";

function App() {
  return (
    <>
      <Counter />
      <Switch />
      <ParagraphToggle />
      <Input />
      <Password />
      <Sidebar />
    </>
  );
}

export default App;
