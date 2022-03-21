import Score from "/script/score.js";
import Duck from "/script/duck.js";
import InputHandler from "/script/input.js";
import Hunter from "/script/hunter.js";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  END: 3,
};

export default class Game {
  constructor(screenWidth, screenHeight) {
    //Game area
    this.gameWidth = screenWidth;
    this.gameHeight = screenHeight - 200;
    //Game area + score area
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.background = document.getElementById("sky");
    this.logo = document.getElementById("logo");
    this.dog = document.getElementById("dog");
    this.timer = 0;
    this.gamestate = GAMESTATE.MENU;
    //Loop index for the duck score increment
    this.loopIndex = 0;
  }

  start() {
    this.duck = new Duck(this);
    this.score = new Score(this);
    this.hunter = new Hunter(this);
    this.gameObjects = [this.duck, this.score, this.hunter];
    new InputHandler(this);
  }

  stop() {
    this.gamestate = GAMESTATE.END;
  }

  draw(ctx) {
    //GAME RUNNING SCREEN
    ctx.drawImage(this.background, 0, 0);

    this.gameObjects.forEach((element) => element.draw(ctx));
    //MENU SCREEN
    if (this.gamestate === GAMESTATE.MENU) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
      ctx.drawImage(this.logo, 15, 0);
      ctx.drawImage(this.dog, 70, 300);
      ctx.fillStyle = "white";
      ctx.font = "48px duck-font";
      ctx.textAlign = "end";
      ctx.fillText(
        "Press ENTER to start the game",
        this.screenWidth - 15,
        this.screenHeight / 2
      );
    }
    //PAUSE SCREEN
    if (this.gamestate === GAMESTATE.PAUSED) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
      ctx.fillStyle = "white";
      ctx.font = "48px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Game Paused", this.screenWidth / 2, this.screenHeight / 2);
      ctx.font = "20px sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "grey";
      ctx.fillText(
        "press ESCAPE to continue",
        this.screenWidth / 2,
        this.screenHeight / 2 + 35
      );
    }

    //PARTY END SCREEN
    if (this.gamestate === GAMESTATE.END) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
      ctx.drawImage(this.logo, 15, 0);
      ctx.drawImage(this.dog, 70, 300);
      ctx.fillStyle = "white";
      ctx.font = "48px duck-font";
      ctx.textAlign = "end";
      ctx.fillText(
        "Press ENTER to start the game",
        this.screenWidth - 15,
        this.screenHeight / 2
      );
    }
  }

  update() {
    if (this.gamestate !== 1) return;
    this.gameObjects.forEach((element) => element.update());
    if (this.timer === 180) this.stop();
  }

  restart() {
    this.gameObjects.forEach((element) => element.reset());
    this.timer = 0;
    this.loopIndex = 0;
  }
}
