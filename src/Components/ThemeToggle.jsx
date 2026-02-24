import React from "react";

const ThemeToggle = React.memo(({ theme, toggleTheme }) => {
  console.log("ThemeToggle rendered");

  return (
    <div className="card">
      <button className="btn secondary" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </button>
    </div>
  );
});

export default ThemeToggle;