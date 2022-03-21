import Score from "/script/score.js";
import Duck from "/script/duck.js";
import InputHandler from "/script/input.js";
export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.background = document.getElementById("sky");
    this.timer = 0;
  }

  start() {
    this.duck = new Duck(this);
    this.score = new Score(this);
    this.gameObjects = [this.duck, this.score];
    new InputHandler(this);
  }

  draw(ctx) {
    ctx.drawImage(this.background, 0, 0);

    this.gameObjects.forEach((element) => element.draw(ctx));
  }

  update(ctx) {
    this.gameObjects.forEach((element) => element.update());
  }
}
