import React from "react";
import TodoItem from "./TodoItem";
import { RootState } from "../store";

import { useAppSelector } from "../hooks";

const TodoList = () => {
  const todos = useAppSelector((state: RootState) => state.todo.todoList);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
