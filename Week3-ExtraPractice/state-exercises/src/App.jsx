import { useState } from "react";
import "./App.css";

import { Counter } from "./Components/Counter";
import { Switch } from "./Components/Switch";
import { ParagraphToggle } from "./Components/ParagraphToggle";

function App() {
  return (
    <>
      <Counter />
      <Switch />
      <ParagraphToggle />
    </>
  );
}

export default App;
