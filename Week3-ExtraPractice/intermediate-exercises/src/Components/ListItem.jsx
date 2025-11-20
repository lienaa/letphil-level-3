import React from "react";
import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

export const ListItem = ({ listItem }) => {

  const toggleComplete = useTodoStore((state) => state.toggleComplete);
  const toggleFavorite = useTodoStore((state) => state.toggleFavorite);

  return (
    <li
      className={`${
        favorite ? "bg-yellow-600" : ""
      } flex gap-4 card border rounded-2xl`}
    >
      <div>
        <p className={`${listItem.complete ? "line-through" : ""}`}>{listItem.text}</p>
      </div>
      <div className="items-center flex gap-2">
        <input
          type="checkbox"
          checked={ listItem.complete }
          onClick={() => {
            toggleComplete(listItem);
          }}
        />
        <p>Complete</p>
      </div>
      <div className="items-center flex gap-2">
        <input
          type="checkbox"
          onClick={() => {
            toggleFavorite(!favorite);
          }}
        />
        <p>Favorite</p>
      </div>
      <div>
        <button
          onClick={() => {
            deleteTodo(listItem.id);
          }}
        >
          Delete
        </button>
      </div>
      <div>
        <p>Timestamp: {listItem.id}</p>
      </div>
    </li>
  );
};
