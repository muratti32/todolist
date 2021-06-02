import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addTodo } from "../../app/todoSlice";
import { ITodo } from "../Model/Todo";

export const AddTodoForm = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (value.trim().length === 0) return;

    const newTodo: ITodo = {
      id: Date.now().toString(),
      title: value,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };
  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Add Todo
      </button>
    </form>
  );
};
