import React from "react";
import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

export const TodoForm = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!text.trim()) return;

        addTodo(text);
        setText("");
      }}
    >
      <input
        className="p-2 border rounded"
        type="text"
        placeholder="Todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button className="mx-2">Add</button>
    </form>
  );
};
