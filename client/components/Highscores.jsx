import { useState, useEffect } from "react";

const Highscores = () => {
    const [highScore, setHighScore] = useState([]);
    
    useEffect(() => {
        console.log('use Effect for highscores ran.')
        fetch("/api/highscores")
        .then((res) => res.json())
        .then((highScore) => {
            setHighScore(highScore);
          })
      }, []);
    
    
      return (
        <div>
          <h1>High Scores:</h1>
          {highScore.map((highScore) => (
            <div className="highScore" key={highScore.id}>
              <p>Username: {highScore.username}</p>
              <p>Score: {highScore.score}</p>
            </div>
          ))}
        </div>
      )
}

export default Highscores;