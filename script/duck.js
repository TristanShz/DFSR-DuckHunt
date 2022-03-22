export default class Duck {
  constructor(game) {
    this.game = game;
    this.image = document.getElementById("duck");
    this.width = 55;
    this.height = 55;
    this.position = {
      x: game.gameWidth / 2,
      y: game.gameHeight / 2,
    };
    this.direction = 0;
    this.speed = 5;
    this.score = 0;
  }

  moveLeft() {
    this.position.x += -this.speed;
  }

  moveRight() {
    this.position.x += this.speed;
  }

  moveTop() {
    this.position.y += -this.speed;
  }

  moveDown() {
    this.position.y += this.speed;
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    switch (this.direction) {
      case 1:
        this.moveLeft();
        break;
      case 2:
        this.moveRight();
        break;
      case 3:
        this.moveTop();
        break;
      case 4:
        this.moveDown();
        break;
    }

    //Check for wall collisions
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x > this.game.gameWidth - this.width)
      this.position.x = this.game.gameWidth - this.width;
    if (this.position.y < 0) this.position.y = 0;
    if (this.position.y + this.height > this.game.gameHeight)
      this.position.y = this.game.gameHeight - this.height;
  }

  reset() {
    this.position = {
      x: this.game.gameWidth / 2,
      y: this.game.gameHeight / 2,
    };
    this.score = 0;
    this.direction = 0;
  }
}
