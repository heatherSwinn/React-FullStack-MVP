import Phaser from 'phaser';

class PhaserGame extends Phaser.Scene {
  constructor() {
    super({ key: 'PhaserGame' });
  }

  preload() {
    // Load your game assets
    this.load.image('background1', './components/images/chocolate-river.jpeg');
    this.load.image('background2', './components/images/yellow-field.png');
    this.load.image('enemy1', './components/images/enemy-bear.png');
    this.load.image('enemy2', './components/images/enemy-cheetah.png');
    this.load.image('enemy3', './components/images/enemy-coyote.png');
    this.load.image('enemy4', './components/images/enemy-lion.png');
    this.load.image('safety1', './components/images/safety-donut.png');
    this.load.image('safety2', './components/images/safety-flamingo.jpg');
    this.load.image('safety3', './components/images/safety-unicorn.jpg');
    this.load.image('safety4', './components/images/safety-watermelon.png');
    this.load.image('player', './components/images/dog.png');
  }

  create() {
    // Calculate the position for the split point (halfway vertically)
    const splitY = this.sys.game.config.height / 2;

    // Add the first background image in the top half
    this.background1 = this.add.image(0, 0, 'background1').setOrigin(0, 0).setDisplaySize(this.sys.game.config.width, splitY);

    // Add the second background image in the bottom half
    this.background2 = this.add.image(0, splitY, 'background2').setOrigin(0, 0).setDisplaySize(this.sys.game.config.width, splitY);

    this.enemy1 = this.add.image(this.sys.game.config.width / 5, this.sys.game.config.height / 2, "enemy1");
    this.enemy2 = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 1.8, "enemy2");
    this.enemy3 = this.add.image(this.sys.game.config.width / 3, this.sys.game.config.height / 1.2, "enemy3");
    this.enemy4 = this.add.image(this.sys.game.config.width / 3, this.sys.game.config.height / 1.6, "enemy4");
    this.safety1 = this.add.image(this.sys.game.config.width / 4.6, this.sys.game.config.height / 3.7, "safety1");
    this.safety2 = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 8, "safety2");
    this.safety3 = this.add.image(this.sys.game.config.width / 3, this.sys.game.config.height / 2.5, "safety3");
    this.safety4 = this.add.image(this.sys.game.config.width / 1.5, this.sys.game.config.height / 3, "safety4");

    const scaleFactor = 0.2; // Adjust this value as needed
    this.enemy1.setDisplaySize(this.enemy1.width * scaleFactor, this.enemy1.height * scaleFactor);
    this.enemy2.setDisplaySize(this.enemy2.width * scaleFactor, this.enemy2.height * scaleFactor);
    this.enemy3.setDisplaySize((this.enemy3.width * scaleFactor) / 3, (this.enemy3.height * scaleFactor) / 3);
    this.enemy4.setDisplaySize((this.enemy4.width * scaleFactor) / 4, (this.enemy4.height * scaleFactor) / 4);
    this.safety1.setDisplaySize((this.safety1.width * scaleFactor) / 7, (this.safety1.height * scaleFactor) / 7);
    this.safety2.setDisplaySize((this.safety2.width * scaleFactor) / 5, (this.safety2.height * scaleFactor) / 5);
    this.safety3.setDisplaySize((this.safety3.width * scaleFactor) / 3, (this.safety3.height * scaleFactor) / 3);
    this.safety4.setDisplaySize((this.safety4.width * scaleFactor) / 7, (this.safety4.height * scaleFactor) / 7);

  }

  update() {
   
  }
}

export default PhaserGame;
