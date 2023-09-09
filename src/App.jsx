import "./index.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./screens/main/MainPage";
import RulesPage from "./screens/rules/RulesPage";
import GamePage from "./screens/game/GamePage";
import { useState } from "react";

export default function App() {
  const [difficulty, setDifficulty] = useState("intermediate");

  const changeDifficulty = (newDifficulty) => {
    //* change diffculty
    setDifficulty(newDifficulty);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              difficulty={difficulty}
              changeDifficulty={changeDifficulty}
            />
          }
        />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
}
