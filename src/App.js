import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    setResult((prev) => prev.concat(value));
  };

  // Clear the input
  const clear = () => setResult("");

  // Backspace functionality
  const backspace = () => setResult(result.slice(0, -1));

  // Calculate the result
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  // Define the button configurations
  const buttons = [
    {
      label: "clear",
      name: "clear",
      className: "highlight",
      id: "clear",
      action: clear,
    },
    {
      label: "c",
      name: "backspace",
      className: "highlight",
      id: "backspace",
      action: backspace,
    },
    { label: "÷", name: "/", className: "highlight", action: handleClick },
    { label: "7", name: "7", action: handleClick },
    { label: "8", name: "8", action: handleClick },
    { label: "9", name: "9", action: handleClick },
    { label: "×", name: "*", className: "highlight", action: handleClick },
    { label: "4", name: "4", action: handleClick },
    { label: "5", name: "5", action: handleClick },
    { label: "6", name: "6", action: handleClick },
    { label: "-", name: "-", className: "highlight", action: handleClick },
    { label: "1", name: "1", action: handleClick },
    { label: "2", name: "2", action: handleClick },
    { label: "3", name: "3", action: handleClick },
    { label: "+", name: "+", className: "highlight", action: handleClick },
    { label: "0", name: "0", action: handleClick },
    { label: ".", name: ".", action: handleClick },
    {
      label: "=",
      name: "=",
      className: "highlight",
      id: "result",
      action: calculate,
    },
  ];

  return (
    <div className="container">
      <form>
        <input type="text" value={result} readOnly />
      </form>
      <div className="keypad">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={button.className}
            id={button.id}
            onClick={() => button.action(button.name)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
