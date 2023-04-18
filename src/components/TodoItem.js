import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodos } from "../features/todos/todoSlice";

const TodoItem = ({ id, title, completed }) => {
const dispatch=useDispatch()  
    return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input type="checkbox" className="mr-3" checked={completed} onChange={e=> dispatch(toggleTodos({id}))}></input>
          {title}
        </span>
        <button className="btn btn-danger" onClick={()=>dispatch(deleteTodo({id}))}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;