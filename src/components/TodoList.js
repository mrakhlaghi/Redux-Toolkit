import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "../features/counter/CounterSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  //   const todos = [
  //     { id: 1, title: "todo1", completed: false },
  //     { id: 2, title: "todo2", completed: false },
  //     { id: 3, title: "todo3", completed: true },
  //     { id: 4, title: "todo4", completed: false },
  //     { id: 5, title: "todo5", completed: false },
  //   ];
  const { todos, error, loading } = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);
  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
