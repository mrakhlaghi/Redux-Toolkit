import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./counter/CounterSlice"
export const  store=configureStore({
    reducer:{
        todos:todoReducer
    }
})