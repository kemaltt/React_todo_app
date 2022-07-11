import React, { useState } from "react";

export default function TodoList({ i, todo, todos, counter, setCounter }) {
  const [isTodoDone, setIsTodoDone] = useState(false);

  const todoDone = () => {
    setIsTodoDone(!isTodoDone);
    if (!isTodoDone) {
      setCounter(counter - 1);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <div
      style={{
        textDecoration: isTodoDone ? "line-through" : "",
        backgroundColor: isTodoDone ? "yellowgreen" : "",
      }}
      key={i}
      onClick={todoDone}
    >
      {todo}
    </div>
  );
}
