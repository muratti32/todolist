import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./app/components/TodoList";
import { AddTodoForm } from "./app/components/AddTodoForm";
import CompletedTodoCount from "./app/components/CompletedTodoCount";

function App() {
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
