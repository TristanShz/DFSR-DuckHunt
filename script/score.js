export default class Score {
  constructor(game) {
    this.game = game;
    this.width = this.game.gameWidth;
    this.height = 200;
    this.position = {
      x: 0,
      y: this.game.gameHeight,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.font = "24px sans-serif";
    ctx.fillText(
      `Timer : ${this.game.timer}`,
      this.position.x + 50,
      this.position.y + this.height / 2
    );
    ctx.fillText(
      `Duck : ${this.game.duck.score}`,
      this.position.x + 550,
      this.position.y + this.height / 2
    );

    ctx.fillText(
      `Hunter : `,
      this.position.x + 950,
      this.position.y + this.height / 2
    );
  }

  update() {}
}
