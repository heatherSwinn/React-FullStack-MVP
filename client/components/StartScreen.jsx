import { useState } from "react";

const StartScreen = ({ onStart }) => {
    const [username, setUsername] = useState("");

    const handleStartGame = () => {
        if (username.trim() !== "") {
            onStart(username);
        }
    };

    return (
        <div className="start-screen">
            <div className="background-image"></div>
            <div className="instructions">
                <h2>Help the dogger survive!</h2>
                <p>
                    You will start with 3 lives and the goal is to
                    to get your dog safely across a field full of wild
                    animals and AVOID THE RIVER OF CHOCOLATE! 
                </p>
                <p>You can use the arrow keys or w/a/s/d to move your dog</p>
                <p>Enter your username below and try to get a highscore!</p>
            </div>
            <div className="start-form">
                <input
                 type="text"
                 placeholder="Enter your username"
                 className="center-input"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleStartGame} className="start-button">
                    Start
                </button>

        </div>
            </div>
    )
}



export default StartScreen;