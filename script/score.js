export default class Score {
  constructor(game) {
    this.game = game;
    this.width = this.game.gameWidth;
    this.height = 130;
    this.position = {
      x: 0,
      y: this.game.gameHeight,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.font = "24px sans-serif";
    ctx.textAlign = "start";
    //Draw timer
    ctx.fillText(
      `Timer : ${this.game.timer}`,
      this.position.x + 30,
      this.position.y + this.height / 2
    );
    //Draw duck score
    ctx.fillText(
      `Duck : ${this.game.duck.score}`,
      this.position.x + 330,
      this.position.y + this.height / 2
    );
    //Draw hunter score
    ctx.fillText(
      `Hunter : ${this.game.hunter.score}`,
      this.position.x + 630,
      this.position.y + this.height / 2
    );

    ctx.fillText(
      "Press ESC to pause the game",
      this.width - 340,
      this.position.y + 45
    );

    ctx.fillText(
      "Press BACKSPACE to restart",
      this.width - 340,
      this.position.y + 95
    );
  }

  update() {}

  reset() {}
}
