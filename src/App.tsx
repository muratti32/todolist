import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { addTodo } from "./app/todoSlice";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import TodoList from "./app/components/TodoList";
import { AddTodoForm } from "./app/components/AddTodoForm";
import CompletedTodoCount from "./app/components/CompletedTodoCount";

function App() {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.todo);

  return (
    <div className="container bg-white p-4 mt-5">
      <h2>Todo List</h2>
      <AddTodoForm />
      <TodoList />
      <CompletedTodoCount />
    </div>
  );
}

export default App;
