import { useState } from "react";
import axios from "axios";
import "./App.css";

const hello = async () => {
  const url = 'http://localhost:3000/hello'
  try {
    const { data } = await axios.get(url)
    alert(data.message);
  }
  catch (e) {
    console.log("Hello Error")
  }
};

function App() {
  return (
    <>
      <h1>Pokemon Edit</h1>
      <button onClick={hello}>Hello</button>
    </>
  );
}

export default App;
