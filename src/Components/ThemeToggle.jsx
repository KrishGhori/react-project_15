import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = React.memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="card">
      <button className="btn secondary" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </button>
    </div>
  );
});

export default ThemeToggle;