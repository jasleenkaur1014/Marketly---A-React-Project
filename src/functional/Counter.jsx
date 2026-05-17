import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add
      </button>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          if (counter <= 0) return;
          setCounter(counter - 1);
        }}
      >
        Subtract
      </button>
    </>
  );
}
