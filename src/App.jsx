import React from "react";
// import TodoList from "./components/TodoList";
// import TodoResults from "./components/TodoResults";
import "./App.css";
import AddTodo from "./components/AddTodo";
import CompletedTodo from "./components/Completed";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div className="root">
      {/* <TodoList />
      <TodoResults /> */}

      <AddTodo />
      <TodoForm />
      <CompletedTodo />
    </div>
  );
};

export default App;


