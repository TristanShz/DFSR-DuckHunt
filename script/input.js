export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", (event) => {
      console.log(event.keyCode);
      switch (event.keyCode) {
        //LEFT key
        case 37:
          game.duck.direction = 1;
          break;
        //RIGHT key
        case 39:
          game.duck.direction = 2;
          break;
        //UP key
        case 38:
          game.duck.direction = 3;
          break;
        //DOWN key
        case 40:
          game.duck.direction = 4;
          break;
        //ENTER key
        case 13:
          if (game.gamestate === 2) {
            game.gamestate = 1;
            game.sound.play(game.sound.intro);
          }
          if (game.gamestate === 3) {
            game.restart();
            game.sound.play(game.sound.intro);
          }
          break;
        //ESC key
        case 27:
          if (game.gamestate === 1) game.gamestate = 0;
          else if (game.gamestate === 0) game.gamestate = 1;
          break;
        //ESPACE key
        case 32:
          if (game.gamestate === 1) game.restart();
          break;
      }
    });

    //Getting the click position and sending it in the hunter object
    document.addEventListener("click", (event) => {
      game.hunter.position.x = event.offsetX;
      game.hunter.position.y = event.offsetY;
    });
  }
}
