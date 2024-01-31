import Highscores from './Highscores.jsx';
import UserInfo from './UserInfo.jsx';
import Phaser from 'phaser';
import PhaserGame from './PhaserGame.jsx'; // Update the import statement to include the file extension
import React from 'react';

class Gameboard extends React.Component {
  componentDidMount() {
    // Create a new Phaser game instance
    let config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'phaser-game-container',
      pixelArt: true,
      physics: {
        default: "arcade",
        arcade: {
          debug: false
        }
      },
      scene: PhaserGame
    };

    new Phaser.Game(config);
  }

  render() {
    const { username, onRestart, onFinish } = this.props;

    return (
      <div className = "app">
        <div className = "info-panel">
          <div className="userinfo">
            <UserInfo username={username} />
          </div>
          <div id="highscores">
            <Highscores />
          </div>
        </div>
        <div className="phaser-game">
          {/* Use a div as the container for the Phaser game */}
          <div id="phaser-game-container" />
        </div>
      </div>
    );
  }
}

export default Gameboard;