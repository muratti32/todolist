import React from "react";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";

const CompletedTodoCount = () => {
  const todos = useAppSelector((state: RootState) => state.todo);
  const completed = todos.todoList.filter((todo) => todo.completed === true);
  return <h4 className="mt-3">Total Complete Items: {completed.length} </h4>;
};

export default CompletedTodoCount;
