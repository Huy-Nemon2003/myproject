import { useState } from "react";
import "./App.css";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keybroad } from "./Keybroad";

function App() {
  const [wordToGuess, setwordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setguessedLetters] = useState<String[]>([]);
  console.log(wordToGuess);
  return (
    <>
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
        <HangmanDrawing />
        <HangmanWord />
        <Keybroad />
      </div>
    </>
  );
}

export default App;
