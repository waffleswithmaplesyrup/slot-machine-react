export default function DifficultySetting({ difficulty, changeDifficulty }) {
  const handleChange = (event) => {
    //* change difficulty state variable from <App/>
    changeDifficulty(event.target.value);
  };
  return (
    <div>
      <h3>difficulty</h3>
      <select onChange={handleChange} name="difficulty" id="difficulty">
        <option value="easy">easy</option>
        <option value="intermediate" selected>
          intermediate
        </option>
        <option value="hard">hard</option>
      </select>

      <div id="difficulty-info">
        {difficulty === "easy" && <p>deal with less icons</p>}

        {difficulty === "intermediate" && (
          <p>
            <strong>beware of grenades!</strong>
            <br />
            kitten + bullet combo will save you from grenade attacks
          </p>
        )}

        {difficulty === "hard" && (
          <p>
            <strong>beware of grenades!</strong>
            <br />
            kittens and bullets won't save you now
          </p>
        )}
      </div>
    </div>
  );
}
