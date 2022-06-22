import React, { useState } from "react";

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("Apples");

  const [name, setName] = useState("");

  let randomFruit = [
    "coconuts",
    "mangos",
    "blue berries",
    "worms...wait!",
    "grapes",
    "strawberries",
    "cherries",
  ];

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <p>Do you like {fruit}?</p>
      <button
        style={{ marginBottom: "20px" }}
        onClick={() =>
          setFruit(randomFruit[Math.floor(Math.random() * randomFruit.length)])
        }
      >
        CHANGE FRUIT
      </button>
    </div>
  );
};

export default Example;
