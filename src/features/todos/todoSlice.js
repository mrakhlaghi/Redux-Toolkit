import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
      // now in redux toolkit we can mutate the state Apparently and in back of toolkit it handle this that don't mutate them
    },
    toggleTodos: (state, action) => {
      const id = action.payload.id;
      const selectedTodo = state.todos.find((todo) => todo.id === id);
      selectedTodo.completed = !selectedTodo.completed;
      // now in redux toolkit we can mutate the state Apparently and in back of toolkit it handle this that don't mutate them
    },
    deleteTodo: (state, action) => {
      const id = action.payload.id;
      const filteredTodos = state.todos.filter((todo) => todo.id !== id);
      state.todos = filteredTodos;
      // now in redux toolkit we can mutate the state Apparently and in back of toolkit it handle this that don't mutate them
    },
  },
});

export const { addTodo, toggleTodos, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
