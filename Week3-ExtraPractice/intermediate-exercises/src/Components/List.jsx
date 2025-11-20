import React from "react";
import { ListItem } from "./ListItem";
import { useTodoStore } from "../store/todoStore";

export const List = () => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const list = useTodoStore((state) => state.todoList);
  const completeList = useTodoStore((state) => state.completeTodo);

  return (
    <>
      <ul className="mt-4 flex flex-col gap-2">
        {list.map((listItem) => {
          return (
            <ListItem
              key={listItem.id}
              listItem={listItem}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
      <p>Completed:</p>
      <ul className="mt-4 flex flex-col gap-2" >
        {completeList.map((listItem) => {
          return (
            <ListItem
              key={listItem.id}
              listItem={listItem}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
};
