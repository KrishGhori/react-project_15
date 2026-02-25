import { useReducer } from "react";
import CounterSection from "../Components/CounterSection";
import ThemeToggle from "../Components/ThemeToggle";
import InfoCard from "../Components/InfoCard";
import { useTheme } from "../context/ThemeContext";
import { countReducer, initialState } from "../reducers/countReducer";
import "../Home.css";

const HomePage = () => {
  const { theme } = useTheme();
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div className={`home ${theme}`}>
      <div className="home-container">

        <div className="home-header">
          <h1>🏠 Home Page</h1>
        </div>

        <div className="top-actions">
          <ThemeToggle />
        </div>

        <div className="content-grid">
          <CounterSection
            count={state.count}
            dispatch={dispatch}
          />
          <InfoCard
            count={state.count}
            theme={theme}
          />
        </div>

      </div>
    </div>
  );
};

export default HomePage;