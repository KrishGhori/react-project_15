import React from "react";
import { motion } from "framer-motion";

const CounterSection = React.memo(({ count, dispatch }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.03 }}
    >
      <h2>Counter</h2>
      <motion.p
        key={count}
        className="count"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        {count}
      </motion.p>

      <div className="btn-group">
        <button
          className="btn primary"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increase
        </button>

        <button
          className="btn danger"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </motion.div>
  );
});

export default CounterSection;