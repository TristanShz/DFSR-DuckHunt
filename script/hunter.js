export default class Hunter {
  constructor(game) {
    this.game = game;
    this.position = {
      x: 0,
      y: 0,
    };

    this.score = 0;
  }

  draw(ctx) {}

  update() {
    //Check if the position of the click is on the duck
    if (
      this.position.x >= this.game.duck.position.x &&
      this.position.x <= this.game.duck.position.x + this.game.duck.width &&
      this.position.y >= this.game.duck.position.y &&
      this.position.y <= this.game.duck.position.y + this.game.duck.height
    ) {
      this.score++;
      this.position = {
        x: null,
        y: null,
      };
    }
  }

  reset() {
    this.score = 0;
  }
}
