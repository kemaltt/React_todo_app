import React, { useState } from "react";

export default function Todo({ i, todo, counter, setCounter }) {
  const [isTodoDone, setIsTodoDone] = useState(true);

  const todoDone = () => {
    setIsTodoDone(!isTodoDone);
    // setCounter(counter - 1);
  };

  return (
    <div>
      <ul style={{}}>
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
