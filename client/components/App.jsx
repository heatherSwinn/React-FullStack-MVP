import { useState } from "react";

import Gameboard from "./Gameboard.jsx"
import StartScreen from "./StartScreen.jsx";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [username, setUsername] = useState("");

  const handleStart = (enteredUsername) => {
    setGameStarted(true);
    setUsername(enteredUsername);
  }

  return (
    <div className="app">
      {!gameStarted ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <Gameboard username={username} />
      )}
    </div>
  );
};

export default App;
