import { Provider } from "react-redux";
import "./App.css";
import store from "./features/store";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteTodo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>hi Mojtaba !</h1>
      {/* <CounterComp/> */}
      <div className="App container">
        {/* <h1>hi saheb !</h1> */}
        {/* <CounterComp /> */}
        <AddTodoForm/>
        <TodoList/>
        <TotalCompleteItems />
      </div>
    </div>
    </Provider>
  );
}

export default App;
