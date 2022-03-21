export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          game.duck.direction = 1;
          break;
        case 39:
          game.duck.direction = 2;
          break;
        case 38:
          game.duck.direction = 3;
          break;
        case 40:
          game.duck.direction = 4;
          break;
      }
    });
  }
}
