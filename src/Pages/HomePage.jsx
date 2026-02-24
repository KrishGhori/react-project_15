import { useReducer } from "react";
import { motion } from "framer-motion";
import { countReducer, initialState } from "../reducers/countReducer";
import { useTheme } from "../context/ThemeContext";

import CounterSection from "../Components/CounterSection";
import ThemeToggle from "../Components/ThemeToggle";
import InfoCard from "../Components/InfoCard";

import "../App.css";

function HomePage() {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const { theme } = useTheme();

  return (
    <motion.div
      className={`home ${theme}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>🏠 Home Page</h1>

      <ThemeToggle />

      <CounterSection count={state.count} dispatch={dispatch} />

      <InfoCard count={state.count} theme={theme} />
    </motion.div>
  );
}

export default HomePage;