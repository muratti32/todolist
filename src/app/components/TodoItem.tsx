import React from "react";
import { useAppDispatch } from "../hooks";
import { deleteTodo, toggleComplete } from "../todoSlice";

const TodoItem: React.FC<{ id: string; title: string; completed: boolean }> = (
  props
) => {
  const { id, title, completed } = props;

  const dispatch = useAppDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCheckboxChange}
          ></input>
          <div style={completed ? { textDecorationLine: "line-through" } : {}}>
            {title}
          </div>
        </span>
        <button
          type="button"
          onClick={handleDeleteClick}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
