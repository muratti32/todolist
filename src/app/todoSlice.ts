import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "./Model/Todo";

interface ITodoList {
  todoList: ITodo[];
}

const initialState: ITodoList = {
  todoList: [
    { id: "1", title: "buy a book", completed: false },
    { id: "2", title: "goto cinema", completed: false },
    { id: "3", title: "call mum", completed: true },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todoList.push(action.payload);
    },
    toggleComplete: (
      state,
      action: PayloadAction<{ id: string; completed: boolean }>
    ) => {
      console.log("dsafasd :  :", action.payload.completed);
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todoList[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      const newState = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todoList = newState;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
