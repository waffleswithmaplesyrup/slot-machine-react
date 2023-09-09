import Navbar from "../navbar/Navbar";

export default function GamePage() {
  return (
    <div>
      <Navbar />
      <section id="game-screen">
      <header>
        <h3 id="wallet">wallet: $<span>???</span></h3>
        <h3 id="kitten-save">kitten save: <span>???</span></h3>
        <h4>bet amount: $
          <select name="bet" id="bet">
            <option value="5" selected>5</option>
            <option value="10">10</option>
            <option value="50">50</option>
          </select>
        </h4>
      </header>

    <div id="icons">
      {/* <!-- when game-screen is rendered, show starting icons --> */}
    </div>

    <button id="spin">spin</button>

    <div id="spin-result">
    {/* <!-- append new paragraph showing results here --> */}
    </div>

  </section>
    </div>
  );
}
