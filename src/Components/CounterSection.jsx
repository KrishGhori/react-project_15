import React from "react";

const CounterSection = React.memo(({ count, incrementCount }) => {
  console.log("CounterSection rendered");

  return (
    <div className="card">
      <h2>Counter</h2>
      <p className="count">{count}</p>

      <button className="btn primary" onClick={incrementCount}>
        Increase Count
      </button>
    </div>
  );
});

export default CounterSection;