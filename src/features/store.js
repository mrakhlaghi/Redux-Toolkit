import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSlice"
import todoReducer from "./todos/todoSlice"
const store=configureStore({
    reducer:{
        counter: counterReducer,
        todos: todoReducer
    },
}) 
 
export default store