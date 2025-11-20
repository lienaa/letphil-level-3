import { create } from "zustand";

export const useTodoStore = create((set, get) => ({
  // List of Todo Objects
  // {id: id, text: string, complete: bool, favorite: bool, }
  todoList: [],
  completeTodo: [],
  favoriteTodo: [],

  // Add todo list
  addTodo: (textInput) =>
    set((todoState) => ({
      todoList: [
        { text: textInput, complete: false, favorite: false, id: Date.now() },
        ...todoState.todoList,
      ],
    })),

  // Delete todo list
  deleteTodo: (id) =>
    set((todoState) => ({
      todoList: todoState.todoList.filter((todo) => todo.id != id),
    })),

  // Toggle completed list
  toggleComplete: (currentTodo) =>
    set((todoState) => {
      if (currentTodo.complete) {
        const todo = todoState.completeTodo.find(
          (todo) => todo.id == currentTodo.id
        );
        const updatedCompleteTodo = todoState.completeTodo.filter(
          (todo) => todo.id != currentTodo.id
        );
        const updatedTodoList = [
          { ...currentTodo, complete: !currentTodo.complete },
          ...todoState.todoList,
        ];
        return { todoList: updatedTodoList, completeTodo: updatedCompleteTodo };
      } else {
        const todo = todoState.todoList.find(
          (todo) => todo.id == currentTodo.id
        );
        const updatedTodoList = todoState.todoList.filter(
          (todo) => todo.id != currentTodo.id
        );
        const updatedCompleteTodo = [
          { ...currentTodo, complete: !currentTodo.complete },
          ...todoState.completeTodo,
        ];
        return { todoList: updatedTodoList, completeTodo: updatedCompleteTodo };
      }
    }),

    // Toggle favorite list 
    toggleFavorite: (currentTodo) => set((todoState) => {}), 
}));



