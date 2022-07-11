import React, { useState } from "react";

export default function Todo({ i, todo, todos, counter, setCounter }) {
  const [isTodoDone, setIsTodoDone] = useState(true);

  const todoDone = () => {
    setIsTodoDone(!isTodoDone);
    if (isTodoDone) {
      setCounter(counter - 1);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <div>
      <ul>
        <li
          style={{
            textDecoration: !isTodoDone ? "line-through" : "",
            backgroundColor: !isTodoDone ? "yellowgreen" : "",
          }}
          key={i}
          onClick={todoDone}
        >
          {todo}
        </li>
      </ul>
    </div>
  );
}
