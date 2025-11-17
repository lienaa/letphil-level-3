import { useState } from "react";
import "./App.css";

import { Counter } from "./Components/Counter";
import { Switch } from "./Components/Switch";
import { ParagraphToggle } from "./Components/ParagraphToggle";
import { Input } from "./Components/Input";

function App() {
  return (
    <>
      <Counter />
      <Switch />
      <ParagraphToggle />
      <Input />
    </>
  );
}

export default App;
