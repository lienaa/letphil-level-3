import React from "react";
import { useState } from "react";

export function Input() {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState("");

  return (
    <div className="py-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDisplay(text);
          return;
        }}
      >
        <input
          type="text"
          placeholder="enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" />
      </form>
      <p>{display}</p>
    </div>
  );
}
