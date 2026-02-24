import { useCallback, useState } from "react";
import CounterSection from "../Components/CounterSection";
import ThemeToggle from "../Components/ThemeToggle";
import InfoCard from "../Components/InfoCard";
import "../App.css";

function HomePage() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <div className={`home ${theme}`}>
      <h1>🏠 Home Page</h1>

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <CounterSection count={count} incrementCount={incrementCount} />

      <InfoCard count={count} theme={theme} />
    </div>
  );
}

export default HomePage;