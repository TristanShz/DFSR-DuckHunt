"use strict";

import Game from "/script/game.js";

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = 1200;
const GAME_HEIGHT = 800;

const game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

//Timer and Duck score increment

setInterval(function () {
  if (game.gamestate === 1) {
    game.loopIndex++;
    if (game.loopIndex === 10) {
      game.duck.score++;
      game.loopIndex = 0;
    }
    game.timer++;
  }
}, 1000);

function gameLoop() {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.draw(ctx);
  game.update(ctx);
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
