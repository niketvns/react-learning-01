import React, { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(1);

  const incrementCounter = (incAmount) => {
    setCounterValue(counterValue + incAmount);
  };

  return (
    <section>
      <h1>{counterValue}</h1>
      <button className="add_btn" onClick={() => incrementCounter(5)}>
        Add
      </button>
    </section>
  );
};

export { Counter };
