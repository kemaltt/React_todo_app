import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

export default function Home(props) {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  const addTodo = (e) => {
    e.preventDefault();

    if (input.length > 0) {
      setTodos([...todos, input]);
      setCounter(counter + 1);
      setInput("");
    } else {
      alert("Please enter a todo");
    }
  };
  //   useEffect(() => {
  //     // console.log(todos);
  //   }, [todos]);

  return (
    <div className="todo_container">
      <div className="todos_input">
        <h1>Todo App</h1>
        <p>{counter}</p>
        <form onSubmit={addTodo} action="">
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            type="text"
            name="text"
            id="text"
            placeholder="Neues TODO"
          />
          <button type="submit">+</button>
        </form>
      </div>
      <div className="todo_list">
        {todos.map((todo, i) => (
          <TodoList
            key={i}
            todo={todo}
            todos={todos}
            counter={counter}
            setCounter={setCounter}
          />
        ))}
      </div>
    </div>
  );
}
