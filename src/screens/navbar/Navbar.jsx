import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showSublinks, setShowSublinks] = useState(false);

  //* open or close sublinks
  const handleClick = () => {
    setShowSublinks(!showSublinks);
    const sound = new Audio('../../../assets/sounds/click.mp4');
    sound.play();
  };
  return (
    <section id="navbar">
      <nav>
        <Link to="/">
          <img 
            onClick={()=>{
              const sound = new Audio('../../../assets/sounds/click.mp4');
              sound.play();
            }}
            id="logo"
            className="start-screen"
            src="../../assets/images/nav-logo.png"
            alt="slots"
          />
        </Link>
        <h3>slots</h3>
        <div onClick={handleClick} id="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {showSublinks && (
        <div id="sublinks">
          <nav>
            <Link to="/rules"><h4 className="game-rules">game rules</h4></Link>
            <Link to="/game"><h4 className="start-game">start game</h4></Link>
            <Link to="/"><h4 className="start-screen">restart</h4></Link>
          </nav>
        </div>
      )}
    </section>
  );
}
