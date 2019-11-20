import React, { useState, useEffect } from "react";
import List from "./List.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = e => {
    setNewTodo(e.target.value);
  };

  const addTodo = e => {
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    console.log("새로운 렌더링!", todos);
  }, [todos]);

  return (
    <>
      <h1>todo 애플리케이션</h1>

      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={() => addTodo()}>할일추가</button>
      </form>

      <List todos={todos} />
    </>
  );
};

export default App;
