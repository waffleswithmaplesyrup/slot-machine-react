import { Link } from "react-router-dom";
import DifficultySetting from "./components/DifficultySetting";

export default function MainPage({ difficulty, changeDifficulty }) {
  return (
    <section id="start-screen">
      <h1>slots</h1>
      <Link to="/game">
        <h2 id="start-game" className="start-game">
          start game
        </h2>
      </Link>
      <Link to="/rules">
        <h2 id="game-rules" className="game-rules">
          game rules
        </h2>
      </Link>

      <DifficultySetting
        difficulty={difficulty}
        changeDifficulty={changeDifficulty}
      />
    </section>
  );
}
