import { useState } from "react";
import "./styles.css";
const CharacterCounterInput = ({ text, defaults }) => {
  const maxLength = 20;
  const [input, setInput] = useState("");
  return (
    <div className={`counterInput ${input.length > 20 ? "tooLong" : ""}`}>
      <div>
        {defaults.map((mood) => (
          <button key={mood} onClick={() => setInput(mood)}>
            {mood}
          </button>
        ))}
      </div>
      <textarea
        placeholder={text}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></textarea>
      <div>
        {input.length}/{maxLength}
      </div>
    </div>
  );
};
export default function App() {
  let defaultMoods = ["Great", "Okay", "Bad", "Terrible"];
  return (
    <div className="App">
      <h1>Mood Tracker</h1>
      <div>
        <CharacterCounterInput
          text={"How was your day?"}
          defaults={defaultMoods}
        />
      </div>
    </div>
  );
}
