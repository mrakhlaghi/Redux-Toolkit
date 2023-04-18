import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3001/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  todos: [],
  error: null,
  loading: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  // reducers special for sync datas

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const id = action.payload.id;
      const filteredTodos = state.todos.filter((t) => t.id !== id);
      state.todos = filteredTodos;
    },
    toggleTodo: (state, action) => {
      const id = action.payload.id;
      const selectedTodo = state.todos.find((t) => t.id === id);
      selectedTodo.completed = !selectedTodo.completed;
    },
  },
  // extraReducers special for asyc datas not sync datas
  // extraReducers for manage async data reducers
  extraReducers: {
    // getAsyncTodos has 3 type of output and answer --> pending , rejected , fullFiled
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { ...state, todos: action.payload, error: null, loading: false };
    },
    [getAsyncTodos.pending]: (state, action) => {
      return { ...state, todos: [], error: null, loading: true };
    },
    [getAsyncTodos.rejected]: (state, action) => {
      return { ...state, todos:[], error: action.error.message, loading: false };
    },
    // to has a dynamic properties we use bracket Notation
  },
});
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
