import "./App.css";
import { Provider } from "react-redux";
import { store } from "./features/store";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteTodo";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>hi Mojtaba !</h1>
        {/* <Counter /> */}
        <div className="App container">
          {/* <CounterComp /> */}
          <AddTodoForm />
          <TodoList />
          <TotalCompleteItems />
        </div>
      </div>
    </Provider>
  );
}

export default App;
