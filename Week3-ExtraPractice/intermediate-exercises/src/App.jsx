import "./App.css";
import { useState, useEffect } from "react";
import { useTodoStore } from "./store/todoStore"

import { TodoForm } from "./Components/TodoForm";
import { List } from "./Components/List";

function App() {

  const todoList = useTodoStore((state)=>state.todoList);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1>Todo List</h1>
        <TodoForm />
      </div>
      <List />
    </>
  );
}

export default App;
