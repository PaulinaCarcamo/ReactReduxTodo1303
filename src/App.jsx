import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import CompletedTodo from "./components/Completed";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div className="root">
      <AddTodo />
      <TodoForm />
      <CompletedTodo />
    </div>
  );
};

export default App;


